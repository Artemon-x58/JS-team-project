import { BackendAPI } from './tasty-backend-api';

function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


function createRecipePopular(description, preview, title) {
  const popularBox = document.querySelector(".popular-box");
  const markup = `
    <div class="popular-wrapper">
      <img src="${preview}" alt="${title}">
      <div class="popular-box-text">
        <h3 class="popular-name">${title}</h3>
        <p class="popular-description">${description}</p>
      </div>
    </div>`;
  popularBox.insertAdjacentHTML("beforeend", markup);
}


function showPopularRecipes() {
  const popularBox = document.querySelector(".popular-box");
  popularBox.innerHTML = "";

  const backendReturnDataPop = new BackendAPI();
  backendReturnDataPop.searchPopularRecipes()
    .then(resp => {
      const recipes = resp.data;
      const numContainers = window.innerWidth >= 768 ? 4 : 2;

     
      recipes.slice(0, numContainers).forEach(({ description, preview, title }) => {
        createRecipePopular(description, preview, title);
      });
    })
    .catch(console.warn);
}


window.addEventListener('resize', debounce(showPopularRecipes, 250));


showPopularRecipes();