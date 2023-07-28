import { handleSeeRecipe } from './modal-recipe';
import './modal-rating';

const galleryDivFavorites = document.querySelector('.categories-gallery');

const giveARAtingBtn = document.querySelector('.ab-give-a-rating');
const exitBtn = document.querySelector('.ab-exit-btn');

console.log(galleryDivFavorites);

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

galleryDivFavorites.addEventListener('click', event => {
  console.log(event.target.parentNode.parentNode.id);

  if (event.target.parentNode.parentNode.id === '') {
    console.log('buba');
  }

  handleSeeRecipe(event);
});

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

//-----------------RATING MODAL---------------

// const ratingForm = document.querySelector('.add-rating-form');
// const ratingChoosed = document.querySelector('.js-rating-choosed');
// const starInputs = ratingForm.querySelectorAll("input[name='rating']");

// const backendData = new BackendAPI();

// const emailInput = document.querySelector('.add-rating-email');

// // const backdrop = document.querySelector('.add-rating-backdrop');
// const modal = document.querySelector('.add-rating-modal');
// // const closeButton = document.querySelector('.add-rating-close-icon');

// //event listeners to radio buttons
// starInputs.forEach(input => {
//   input.addEventListener('change', updateRatingCounter);
// });

// // Event listener for close button click
// // closeButton.addEventListener('click', closeModal);

// // Event listener for backdrop click
// // backdrop.addEventListener('click', function (event) {
// //   if (event.target === backdrop) {
// //     closeModal();
// //   }
// // });

// // Function to update the rating counter
// function updateRatingCounter() {
//   const selectedValue = ratingForm.querySelector(
//     "input[name='rating']:checked"
//   ).value;
//   ratingChoosed.textContent = selectedValue + '.0';

//   backendData.userRatings.rate = Number(ratingChoosed.textContent);
// }

// // Function to close the modal
// // function closeModal() {
// //   backdrop.style.display = 'none';
// //   modal.style.display = 'none';
// // }

// //---------------BACKEND FUNCTIONAL--------------

// const recipeModal = document.querySelector('.modal-recipe');

// ratingForm.addEventListener('submit', event => {
//   event.preventDefault();
//   backendData.userRatings.email = emailInput.value;

//   backendData.recipeID = modal.parentElement.id;

//   backendData.passRating();

//   modal.toggleAttribute('data-hidden');
//   recipeModal.toggleAttribute('modal-margin');
// });

// const closeButton = document.querySelector('.add-rating-close-btn');

// closeButton.addEventListener('click', event => {
//   modal.toggleAttribute('data-hidden');
//   recipeModal.toggleAttribute('modal-margin');
// });
