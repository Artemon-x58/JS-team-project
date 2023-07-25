import { createButtons } from './create-buttons';
import { createCard } from './create-cards-markup';
import { noRecipes } from './create-no-favorites';
import { BackendAPI } from '../tasty-backend-api';

const recipeCard = document.querySelector('.kz-favorite-recipes');
const categoriesFavorite = document.querySelector('.kz-btn-favorite-recipes');
const btnAllCategories = document.querySelector('.btn-all');
const favoriteDescription = document.querySelector('.kz-favorite-description');
const favoriteSection = document.querySelector('.kz-favorite-section');

const KEY = 'favorite-recipes';
const api = new BackendAPI();
// let recipes;

async function favoriteRecipesAdding() {
  try {
    // get data from the database
    const resp = await api.searchAllRecipes();
    let dataRecipes = resp.data.results;

    let recipes = dataRecipes.map(results => ({
      category: results.category,
      description: results.description,
      preview: results.preview,
      rating: results.rating,
      id: results._id,
      title: results.title,
    }));

    // create a new button markup
    function btnCategoriesAdding() {
      categoriesFavorite.innerHTML = createButtons(recipes);
    }

    btnCategoriesAdding();

    // create a new picture markup
    function newCard() {
      recipeCard.innerHTML = createCard(recipes);
      const btnAddFavorite = document.querySelectorAll('.kz-btn-icon');

      // add event listener (click on heart)

      btnAddFavorite.forEach(btn => {
        btn.addEventListener('click', handleButtonClick);
      });
      function handleButtonClick(evt) {
        const favoriteId = evt.currentTarget.dataset.recipeId;
        // find a specific recipe
        const currentData = recipes.find(recipe => recipe.id === favoriteId);
        // add to local storage
        if (currentData) {
          localStorage.setItem(KEY, JSON.stringify(currentData));
        }
      }
    }

    newCard();
  } catch (error) {
    console.warn(error);
  }
}

favoriteRecipesAdding();

function noFavorite() {
  return (favoriteSection.innerHTML = noRecipes());
}

// console.log(noFavorite());
