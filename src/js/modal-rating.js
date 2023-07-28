import { BackendAPI } from './tasty-backend-api';
import Notiflix from 'notiflix';

const ratingForm = document.querySelector('.add-rating-form');
const ratingChoosed = document.querySelector('.js-rating-choosed');
const starInputs = ratingForm.querySelectorAll("input[name='rating']");

const backendData = new BackendAPI();

const emailInput = document.querySelector('.add-rating-email');

const modal = document.querySelector('.add-rating-modal');

starInputs.forEach(input => {
  input.addEventListener('change', updateRatingCounter);
});

function updateRatingCounter() {
  const selectedValue = ratingForm.querySelector(
    "input[name='rating']:checked"
  ).value;
  ratingChoosed.textContent = selectedValue + '.0';

  backendData.userRatings.rate = Number(ratingChoosed.textContent);
}

//---------------BACKEND FUNCTIONAL--------------

const recipeModal = document.querySelector('.modal-recipe');

ratingForm.addEventListener('submit', event => {
  event.preventDefault();
  backendData.userRatings.email = emailInput.value;

  backendData.recipeID = modal.parentElement.id;

  backendData.passRating().then(res => {
    Notiflix.Notify.success('Success, your rating has been added successfully!');
  }).catch(erroe => {
    Notiflix.Notify.failure('Oops, something went wrong!');
  });

  modal.toggleAttribute('data-hidden');
  recipeModal.toggleAttribute('modal-margin');
});

const closeButton = document.querySelector('.add-rating-close-btn');

closeButton.addEventListener('click', event => {
  modal.toggleAttribute('data-hidden');
  recipeModal.toggleAttribute('modal-margin');
});
