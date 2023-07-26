const allRecipesEl = document.querySelector('.main-btn');
const galleryListEl = document.querySelector('.categories-gallery');
const categoriesBtnsEls = document.querySelector('.categories-btn-pn');

const parsedRecipes = JSON.parse(localStorage.getItem('favoritiesRecipes'));

galleryListEl.innerHTML = createRecipeContainers(parsedRecipes);

console.log(galleryListEl.children.length);

allRecipesEl.classList.add('btn-active');
allRecipesEl.setAttribute('disabled', '');

allRecipesEl.addEventListener('click', handlerLoadAllRecipes);

function handlerLoadAllRecipes() {
  const btnCateg = categoriesBtnsEls.childNodes;
  btnCateg.forEach(el => el.classList.remove('btn-active'));
  allRecipesEl.classList.add('btn-active');
  galleryListEl.innerHTML = '';
  galleryListEl.innerHTML = createRecipeContainers(parsedRecipes);
}

function createRecipeContainers(array) {
  return array
    .map(
      ({
        _id,
        title,
        description,
        rating,
        preview,
        category,
      }) => `<div id="${_id}" data-category="${category}" class="filters-box-child grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${preview}'); background-size: cover; background-position: center;">
        <svg class="filters-icon-heart">
            <use href="../img/symbol-defs.svg#icon-heart"></use>
        </svg>
        <h2 class="filters-title-recipe">${title}</h2>
        <p class="filters-description-recipe">${description}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${rating}</p>
  <svg class="filters-icon-rating-recipe-1 ${getRatingColorClass(rating, 1)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${getRatingColorClass(rating, 2)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${getRatingColorClass(rating, 3)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${getRatingColorClass(rating, 4)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${getRatingColorClass(rating, 5)}">
    <use href="../img/symbol-defs.svg#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
      </div>`
    )
    .join('');
}

function getRatingColorClass(rating, stars) {
  if (rating >= stars) {
    return 'filters-icon-rating-yellow-' + stars;
  } else {
    return 'filters-icon-rating-black';
  }
}

const categories = [];
parsedRecipes.forEach(({ category }) => {
  if (categories.includes(category)) {
    return;
  }
  categories.push(category);
});

categoriesBtnsEls.innerHTML = categoriesBtns(categories);

categoriesBtnsEls.addEventListener('click', handlerCategoryRecipes);

function handlerCategoryRecipes(e) {
  allRecipesEl.removeAttribute('disabled', '');
  allRecipesEl.classList.remove('btn-active');
  const btnCateg = categoriesBtnsEls.childNodes;
  btnCateg.forEach(el => el.classList.remove('btn-active'));
  console.log(btnCateg);
  galleryListEl.innerHTML = createRecipeContainers(
    parsedRecipes.filter(
      parsedRecipe => parsedRecipe.category === e.target.name
    )
  );
  e.target.classList.add('btn-active');
}

function categoriesBtns(els) {
  return els
    .map(
      el =>
        `<button type="button" name="${el}" class="btn">
        ${el}
      </button>`
    )
    .join('');
}
