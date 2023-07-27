import { BackendAPI } from './tasty-backend-api';

const galleryDiv = document.querySelector('.filters-box-parent');
const backdropRecipe = document.querySelector('.modal-recipe-backdrop');
const exitBtn = document.querySelector('.ab-exit-btn');

const dataOptionsObj = new BackendAPI();

const dishName = document.querySelector('.ab-dish-name');
const video = document.querySelector('.ab-video');
const starRatingNumb = document.querySelector('.ab-star-rating-number');
const cookingTime = document.querySelector('.ab-cooking-time');
const ingredientList = document.querySelector('.ab-ingredient-list');
const hashTagList = document.querySelector('.ab-hashtag-list');
const recipeDescription = document.querySelector('.ab-recipe-description');

const starContainer = document.querySelector('.ab-star-container');

function changeVideoLink(newLink) {
  const newLinkId = newLink.split('=');
  const finalLink = `https://www.youtube.com/embed/${newLinkId[1]}`;

  if (video.src !== finalLink) {
    video.src = finalLink;
  }
}

function fillIngredientList(ingredientArray) {
  ingredientList.innerHTML = '';

  ingredientArray.forEach(element => {
    ingredientList.insertAdjacentHTML(
      'beforeend',
      `<li class="ab-ingredient">
        <p class="ab-ingredient-name">${element.name}</p>
        <p class="ab-ingredient-amount">${element.measure}</p>
      </li>`
    );
  });
}

function fillHashtagList(tagArray) {
  hashTagList.innerHTML = '';

  if (tagArray[0] !== '') {
    tagArray.forEach(element => {
      hashTagList.insertAdjacentHTML(
        'beforeend',
        `<li class="ab-recipe-hashtag">#${element}</li>`
      );
    });
  }
}

function colorStars(starRating) {
  const amountOfYellowStars = Math.floor(starRating);

  for (let i = 0; i < starContainer.children.length; i++) {
    starContainer.children[i].removeAttribute('fill');
  }

  for (
    let i = 0;
    i < starContainer.children.length - amountOfYellowStars;
    i++
  ) {
    starContainer.children[starContainer.children.length - 1 - i].setAttribute(
      'fill',
      'rgba(5, 5, 5, 0.5)'
    );
  }

  for (let i = 0; i < amountOfYellowStars; i++) {
    starContainer.children[i].setAttribute('fill', 'rgba(238, 161, 12, 1)');
  }
}

function handleSeeRecipe(event) {
  if (event.target.classList.contains('filters-btn-recipe')) {
    backdropRecipe.toggleAttribute('data-hidden');
    document.body.style.overflow = 'hidden';

    dataOptionsObj.recipeID = event.target.parentNode.parentNode.id;
    dataOptionsObj
      .searchRecipeID()
      .then(res => {
        backdropRecipe.id = event.target.parentNode.parentNode.id;

        const data = res.data;
        dishName.textContent = data.title;
        changeVideoLink(data.youtube);
        starRatingNumb.textContent = data.rating;
        cookingTime.textContent = `${data.time} min`;
        fillIngredientList(data.ingredients);
        fillHashtagList(data.tags);
        recipeDescription.textContent = data.instructions;
        colorStars(data.rating);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

galleryDiv.addEventListener('click', event => {
  handleSeeRecipe(event);
});

// document.addEventListener('DOMContentLoaded', event => {
//   const galleryDivFavorites = document.querySelector('.grid-item');

//   console.log(galleryDivFavorites);

//   galleryDivFavorites.addEventListener('click', event => {
//     handleSeeRecipe(event);
//   });
// });

const giveARAtingBtn = document.querySelector('.ab-give-a-rating');
const ratingModal = document.querySelector('.add-rating-modal');
const recipeModal = document.querySelector('.modal-recipe');

function toggleRatingModal() {
  ratingModal.toggleAttribute('data-hidden');
  recipeModal.toggleAttribute('modal-margin');
}

function closeRecipeModal() {
  backdropRecipe.toggleAttribute('data-hidden');
  document.body.style.overflow = 'auto';

  if (!ratingModal.hasAttribute('data-hidden')) {
    // ratingModal.toggleAttribute('data-hidden');
    // recipeModal.toggleAttribute('modal-margin');

    toggleRatingModal();
  }
}

giveARAtingBtn.addEventListener('click', event => {
  // ratingModal.toggleAttribute('data-hidden');
  // recipeModal.toggleAttribute('modal-margin');

  toggleRatingModal();
});

exitBtn.addEventListener('click', event => {
  closeRecipeModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeRecipeModal();
  }
});
