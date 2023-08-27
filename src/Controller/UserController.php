<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use App\Service\UnloadUserToExcel;
use App\Service\UploadUserFromExcel;
use App\Service\UserWithWeather;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/user')]
class UserController extends AbstractController
{
    //получаем всех пользователей + роль
    #[Route('/', name: 'app_user')]
    public function indexUser(/*Request $request,*/ UserWithWeather $userWithWeather): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $userWithWeather->updateUserWithWeather(),
        ]);
    }

    //добавляем нового ползователя
    #[Route('/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function newUser(Request $request, UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->save($user, true);

            return $this->redirectToRoute('app_user', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/form.html.twig', [
            'user' => $user,
            'form' => $form,
            'title'=>'Новый пользователь',
        ]);
    }

    //редактируем пользователя
    #[Route('/edit/{id}', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function editUser(Request $request, User $user, UserRepository $userRepository): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->save($user, true);
            return $this->redirectToRoute('app_user', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/form.html.twig', [
            'user' => $user,
            'form' => $form,
            'title'=>'Редактирование пользователя',
        ]);
    }

    //удаляем пользователя
    #[Route('/delete/{id}', name: 'app_user_delete', methods: ['GET'])]
    public function deleteUser(string $id, Request $request, User $user, UserRepository $userRepository): Response
    {
        $userRepository->remove($user, true);
        die(json_encode(array('text' => 'Пользователь успешно удален из базы',
            'id'=>$id,
            'title'=>'Результат',
            'button'=>'Отлично!',
            'color'=>'#04bf23'
        )));
    }

    //выгружаем пользователей в файл excel
    #[Route('/xlsx', name: 'app_user_xlsx', methods: ['GET'])]
    public function userToExcel(Request $request, UnloadUserToExcel $unloadUserToExcel, UserRepository $userRepository): Response
    {
        $file_options = $unloadUserToExcel->unload($userRepository);
        return $this->file($file_options[0], $file_options[1], ResponseHeaderBag::DISPOSITION_INLINE);
    }

    //загружаем пользователей из файла excel
    #[Route('/xlsx_to_mysql', name: 'app_user_xlsx_to_mysql', methods: ['GET', 'POST'])]
    public function excelToUser(Request $request, UploadUserFromExcel $uploadUserFromExcel, UserWithWeather $userWithWeather): Response
    {
        $import = $uploadUserFromExcel->upload($request);

        if(!empty($import) && $import[0]==0){
            die(json_encode(array(
                'title'=>'Ошибка',
                'text' => "Не верно введено наимнование роли ($import[1]) в файле для загрузки",
                'button'=>'Иду исправлять)',
                'color'=>'#3085d6'
            )));
        }else {
            return $this->render('user/_uploadPreview.html.twig', [
                'users' => $userWithWeather->updateUserWithWeather(),
            ]);
        }

    }
}
