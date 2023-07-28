import { handleSeeRecipe } from './modal-recipe';
import './modal-rating';

const galleryDivFavorites = document.querySelector('.categories-gallery');

const giveARAtingBtn = document.querySelector('.ab-give-a-rating');
const exitBtn = document.querySelector('.ab-exit-btn');

function toggleRatingModal() {
  ratingModal.toggleAttribute('data-hidden');
  recipeModal.toggleAttribute('modal-margin');
}
function closeRecipeModal() {
  backdropRecipe.toggleAttribute('data-hidden');
  document.body.style.overflow = 'auto';

  if (!ratingModal.hasAttribute('data-hidden')) {
    toggleRatingModal();
  }
}

galleryDivFavorites.addEventListener('click', event => {
  if (event.target.parentNode.parentNode.id === '') {
  }
  handleSeeRecipe(event);
});

giveARAtingBtn.addEventListener('click', event => {

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


