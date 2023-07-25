'use strict';
import axios from 'axios';

export class BackendAPI {
  #BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';

  page = 1;
  limit = 6;
  category = null;
  time = null;
  area = null;
  ingredient = null;
  recipeID = null;
  userRatings = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  // Перелік подій(майстер-класів)
  searchMasterClass() {
    return axios.get(`${this.#BASE_URL}events`);
  }
}

const backendReturnData = new BackendAPI();
backendReturnData.searchMasterClass()
  .then(resp => {
    const events = resp.data; // Отриманий масив даних
    //const imgSliderImages = document.querySelectorAll('.img-slider .image-slider_image img'); // Всі зображення в слайдері
    const fotoSliderImages = document.querySelectorAll('.foto-slider');
    const previewSliderImages = document.querySelectorAll('.preview-slider');
    const mealSliderImages = document.querySelectorAll('.meal-slider');
    const textOnImageTS = document.querySelector('.textOnImageTS');
    const mealOriginTS = document.querySelector('.mealOriginTS');

    // Проходимося по кожному зображенню і замінюємо його src на URL зображення з масиву даних
    fotoSliderImages.forEach((img, index) => {
        img.src = events[index].cook.imgUrl; // Припустимо, що дані містять поле imageURL з URL зображення
        //img.alt = events[index].cook.name; // Припустимо, що дані містять поле name з назвою події
    });
    previewSliderImages.forEach((img, index) => {
        img.src = events[index].topic.previewUrl; 
       // img.alt = events[index].topic.name;
    });
    mealSliderImages.forEach((img, index) => {
        img.src = events[index].topic.imgUrl; 
        //img.alt = events[index].topic.name;
    });

    // --------------------Доробити картку їжі на другому слайді
    textOnImageTS.forEach((element, index) => {
        element.textContent = events[index].topic.name;
    });
    mealOriginTS.forEach((element, index) => {
        element.textContent = events[index].topic.area;
    });
  })
  .catch(console.warn);






//import { BackendAPI } from './tasty-backend-api';
//import axios from "axios";

// import Swiper from 'swiper';

// import 'swiper/css';

// --------
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // ---------

// const { default: Swiper } = require("swiper");

const swiper = new Swiper('.swiper-container', {
    //slider settings
    slidersPerViev: 3,
    spaceBetween: 20,
    loop: true,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },

    grabCursor: true,
    // slidesPerView: 3,
    //spaceBetween: 30,
})

