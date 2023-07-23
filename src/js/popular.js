import { BackendAPI } from './tasty-backend-api'; 

const api = new BackendAPI();
const popularList = document.querySelector('.js-popular-list');

document.addEventListener("DOMContentLoaded", onReload);

function onReload(){
  generatePopularRecipeListMarkup()
    .then(markup => {
      if(markup === undefined) {
        popularList.innerHTML = '<p>No popular recipes found.</p>';
        return;
      }
      updateRecipeList(markup);
    })
    .catch(onError);
}

function generatePopularRecipeListMarkup(){
    return api.searchPopularRecipes()
      .then(res => {
        return res.data;
      })
      .then(popularRecipes =>
        popularRecipes.reduce((markup, recipeCard) => markup + renderPopularRecipeMarkup(recipeCard), ''))
      .catch(error => {
        console.error("Error fetching popular recipes: ", error);
      });
  }
  


function renderPopularRecipeMarkup({title, description, _id, preview}){
  return `<li class="recip-item" id="${_id}">
  <img class="recip-img" src="${preview}" alt="${title}" width="64"/>
  <div class="recip-content">
    <h3 class="recip-heading">${title}</h3>
    <p class="recip-short-descr">${description}</p>
  </div>
</li>`;
}

function updateRecipeList(markup){
  popularList.insertAdjacentHTML('beforeend', markup);
}

function onError(error){
  popularList.innerHTML = `<p>Error loading popular recipes: ${error.message}</p>`;
}


