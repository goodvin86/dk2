<?php

namespace App\Command;

use App\Repository\UserRepository;
use App\Service\UnloadUserToExcel;
use Doctrine\Persistence\ManagerRegistry;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use MyBuilder\Bundle\CronosBundle\Annotation\Cron;

#[AsCommand(
    name: 'app:usertoexcel',
    description: 'Команда по выгрузке пользователей в excel',
    hidden: false,
)]
/**
 * @Cron(minute="/2", noLogs=true)
 */
class UnloadUserToExcelCommand extends Command
{
    protected static $defaultDescription = 'Команда по выгрузке пользователей в excel';

    public function __construct(
        private $projectDir,
        private readonly ManagerRegistry $doctrine
    )
    {
        parent::__construct();
    }


    protected function configure()
    {
        $this->setHelp('Эта команда для выгрузки пользователей в excel');
    }

    /**
     * @throws Exception
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $userRepository = new UserRepository($this->doctrine);
        $unloadUserToExcel = new UnloadUserToExcel($this->projectDir);
        $unloadUserToExcel->unload($userRepository);

        $io = new SymfonyStyle($input,$output);
        $io->success('Пользователи успешно выгружены в файл excel (директория: public/excel)');
        return Command::SUCCESS;
    }
}