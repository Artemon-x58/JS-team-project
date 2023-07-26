// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';
import { BackendAPI } from './tasty-backend-api';
const heroSlider = new BackendAPI();



const swiperWrapper = document.querySelector(".swiper-wrapper")


heroSlider.searchMasterClass().then( res => {
    
    res.data.forEach(({cook, topic}) => {
        
        createMurkupSlider(cook.imgWebpUrl, topic.name, topic.area, topic.previewWebpUrl
            )
        
    })
    
})

function createMurkupSlider (src, name, area, urlEat) {
    const murkup = `<div class="img-slider swiper-slide">
    <div class="image-slider_image img-slider-one" style="background-image: url('${src}'); background-position: center ; background-size: cover;"></div>
    <div class="image-slider_image img-slider-two" style="background-image: url('${urlEat}'); background-position: center ; background-size: contain; background-repeat: no-repeat;">
    <h2 class="title">${name}</h2>
  <p class="country">${area}</p></div>
    <div class="image-slider_image img-slider-three" style="background-image: url('${urlEat}'); background-position: center center ;"></div>
  </div>`
  swiperWrapper.insertAdjacentHTML("beforeend", murkup)
}




const swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    // slidesPerView: 1,
    spaceBetween: 20,
    // loop: true,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
    slidesPerView: 0.8,
    // spaceBetween: 30,
  });




  