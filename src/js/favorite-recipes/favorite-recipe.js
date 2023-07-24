import { createButtons } from './create-buttons';
import { createCard } from './create-cards-markup';

const recipeCard = document.querySelector('.kz-favorite-recipes');
const categoriesFavorite = document.querySelector('.kz-btn-favorite-recipes');
const btnAllCategories = document.querySelector('.btn-all');
const favoriteDescription = document.querySelector('.kz-favorite-description');
const favoriteSection = document.querySelector('.kz-favorite-section');

function newCard() {
  return (recipeCard.innerHTML = createCard());
}

newCard();

function newCardCategories() {
  return (categoriesFavorite.innerHTML += createButtons());
}

newCardCategories();

// function noRecipes() {
//   return `<div><svg class="kz-favorite-icon" width="22" height="22">
//   <use href="../img/symbol-defs.svg#icon-favorite"></use>
// </svg><p>It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you like to your favorites for easier access in the future.</p></div>`;
// }

// function noFavorite() {
//   return (favoriteSection.innerHTML = noRecipes());
// }

// console.log(noFavorite());
