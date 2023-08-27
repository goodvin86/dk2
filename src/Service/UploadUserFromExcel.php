<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Exception\ORMException;
use Doctrine\ORM\OptimisticLockException;
use PhpOffice\PhpSpreadsheet\Reader\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class UploadUserFromExcel
{
    public function __construct(
        $projectDir,
        RoleRepository $roleRepository,
        UserRepository $userRepository,
        private readonly EntityManagerInterface $doctrine
    )
    {
        $this->projectDir = $projectDir;
        $this->roleRepository = $roleRepository;
        $this->userRepository = $userRepository;

    }

    /**
     * @throws OptimisticLockException
     * @throws ORMException
     * @throws Exception
     */
    public function upload($file)
    {
        $spreadsheet = new Spreadsheet();

        if (isset($file)) {
            $file_mimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            if(isset($_FILES['file']['name']) && in_array($_FILES['file']['type'], $file_mimes)) {
                $arr_file = explode('.', $_FILES['file']['name']);
                $extension = end($arr_file);

                if('csv' == $extension) {
                    $reader = new \PhpOffice\PhpSpreadsheet\Reader\Csv();
                } else {
                    $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
                }

                $spreadsheet = $reader->load($_FILES['file']['tmp_name']);

                $sheetData = $spreadsheet->getActiveSheet()->toArray();

                if (!empty($sheetData)) {
                    for ($i=1; $i<count($sheetData); $i++) {
                        $id = $sheetData[$i][0];
                        $user_array['lastname'] = $sheetData[$i][1];
                        $user_array['firstname'] = $sheetData[$i][2];
                        $user_array['patronymic'] = $sheetData[$i][3];
                        $user_array['birthday'] = $sheetData[$i][4];
                        $user_array['city'] = $sheetData[$i][5];
                        $role = $sheetData[$i][6];

                        $roleRepository = $this->roleRepository;
                        $userRepository = $this->userRepository;

                        $isRoleReal = $roleRepository->findOneBy(array('name' => $role));

                        if (!empty($isRoleReal)){
                            $user = new User();
                            $user->setLastname($user_array['lastname']);
                            $user->setFirstname($user_array['firstname']);
                            $user->setPatronymic($user_array['patronymic']);
                            $user->setBirthday(date_create_from_format('d.m.Y', $user_array['birthday']));
                            $user->setCity($user_array['city']);
                            $user->setRole($isRoleReal);
                            $this->doctrine->persist($user);
                            $this->doctrine->flush();
                        }else{
                            $error_array[0] = 0;
                            $error_array[1] = $role;
                            return $error_array;
                        }
                    }
                }
            }
        }
    }
}