import {createButtons} from './kzCreateButtons.js'
import {createCard} from './kzCreateCardMarkup'

const recipeCard = document.querySelector('.kz-favorite-recipes');
const categoriesFavorite = document.querySelector('.kz-btn-favorite-recipes');
const btnAllCategories = document.querySelector('.btn-all');


function newCard() {
  return (recipeCard.innerHTML = createCard());
}

newCard();


function newCardCategories() {
  return (categoriesFavorite.innerHTML += createButtons());
}

newCardCategories();
