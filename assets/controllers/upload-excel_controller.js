import { Controller } from '@hotwired/stimulus';
import Swal from 'sweetalert2';
import { Modal } from 'bootstrap';
import $ from 'jquery';
export default class extends Controller {
    static values = {
        url: String,
    }

    static targets = ['file', 'uploadresult'];

    onSubmit(event) {
        //console.log('адрес для запроса='+this.urlValue+'; имя файла='+this.fileTarget.files[0].name);

        const formData = new FormData();
        formData.append('file', this.fileTarget.files[0]);

        //console.log(formData.get('file'));//если хочется посмотреть имя файла

        // делаем запрос на сервер по адресу, который пришел в переменной url
        // передаем через formData файл из поля input со свойством data-upload-excel-target="file"
        return fetch(this.urlValue, {
            method: 'POST',
            body: formData
        })

            //читаем заголовок ответа
            .then(response => {
                if (!response.ok) {
                    // если в заголовке ответа от сервера содержится ошибка, то готовим текст ошибки
                    throw new Error(response.statusText)
                }
                // возвращаем тело ответа в формате json
                //return response.json()
                return response.text()
            })

            //обрабатываем результат
            .then(result => {
                console.log('обработка результата')
                if (!result && result['title']==='Ошибка'){
                    //показываем sweetalert сообщение, текст которого формирует
                    // контроллер UserController (app_user_xlsx_to_mysql)
                    Swal.fire({
                        title: result['title'],
                        text: result['text'],
                        showCancelButton: true,
                        showConfirmButton: false,
                        cancelButtonColor: result['color'],
                        cancelButtonText: result['button'],
                    })
                }
                else {
                    //console.log('all good')
                    console.log(result)
                    this.uploadresultTarget.innerHTML = result

                }
        })
        .catch(error => {
            // если был сформирован текст ошибки, то выдаем ее через sweetalert
            console.log('error='+error)//вывод ошибки в консоль
            // Swal.showValidationMessage(
            //     `Request failed: ${error}`
            // )
        })
    }
}