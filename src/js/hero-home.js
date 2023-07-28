
import { BackendAPI } from './tasty-backend-api';
const heroSlider = new BackendAPI();
const swiperWrapper = document.querySelector(".swiper-wrapper")


heroSlider.searchMasterClass().then( res => {
    
    res.data.forEach(({cook, topic}) => {
        
        createMurkupSlider(cook.imgWebpUrl, topic.name, topic.area, topic.previewWebpUrl
            )
    })
}).catch( error => {
  console.warn(error)
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
 
    spaceBetween: 20,
    spaceBetween: 10,
// loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    grabCursor: true,
    slidesPerView: 0.8,

  });




  