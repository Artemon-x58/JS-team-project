import { BackendAPI } from './tasty-backend-api';

const modalOrderPost = new BackendAPI();

const modal = document.querySelector('.modal');
const form = modal.querySelector('.contacts-input-form');


form.addEventListener("submit", e => {
    e.preventDefault();
    const username = modal.querySelector('[name="username"]').value;
    const userphone = modal.querySelector('[name="userphone"]').value;
    const usermail = modal.querySelector('[name="usermail"]').value;
    const comment = modal.querySelector('[name="comment"]').value;

    modalOrderPost.userOrder["name"] = username;
    modalOrderPost.userOrder["phone"] = userphone;
    modalOrderPost.userOrder["email"] = usermail;
    modalOrderPost.userOrder["comment"] = comment;

    modalOrderPost.passOrder().then(res => {
        console.log('Успешный ответ:', res.data);
    })
    .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    });
    });