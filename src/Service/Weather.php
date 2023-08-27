<?php

namespace App\Service;

class Weather
{
    public function showWeather($city)
    {
        // данные переменных окружения $_ENV[] хранятся в файле .env
        $mode     = $_ENV['MODE'];
        $units    = $_ENV['UNITS'];
        $lang     = $_ENV['LANG'];
        $countDay = $_ENV['COUNT_DAY'];
        $appID    = $_ENV['APP_ID'];

        // URL для запроса
        $url = "http://api.openweathermap.org/data/2.5/forecast?q=$city,$mode&cnt=$countDay&lang=$lang&units=$units&appid=$appID";
        // запрос к API
        $data = @file_get_contents($url);
        // если получили данные
        if($data){
            // декодируем полученные данные
            $dataJson = json_decode($data);
            // получаем только нужные данные
            $arrayDays = $dataJson->list;
            // выводим данные
            foreach($arrayDays as $oneDay){
                $weather = "" . $oneDay->main->temp . " ℃, " . $oneDay->weather[0]->description . "";
            }
        }
        else{
            $weather = "Сервер не доступен!";
        }
        return $weather;
    }
}