import { BackendAPI } from './tasty-backend-api';
import axios from "axios";

const modalOrderPost = new BackendAPI();

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const sendButton = modal.querySelector('.modal-button-send');
    const form = modal.querySelector('.contacts-input-form');
    // Добавляем обработчик события на кнопку "Send"
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Собираем данные из формы
        const username = modal.querySelector('[name="username"]').value;
        const userphone = modal.querySelector('[name="userphone"]').value;
        const usermail = modal.querySelector('[name="usermail"]').value;
        const comment = modal.querySelector('[name="comment"]').value;

        const data = {
            "name": username,
            "phone": userphone,
            "email": usermail,
            "comment": comment,
        };

        // Используем Axios для отправки POST-запроса
        axios.post('https://tasty-treats-backend.p.goit.global/api/orders/add', data)
            .then(response => {
                // Выводим успешный ответ в консоль
                console.log('Успешный ответ:', response.data);
            })
            .catch(error => {
                // Обрабатываем ошибки
                console.error('Ошибка при отправке запроса:', error);
            });
    });
});