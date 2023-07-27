import linkIconsFavorites from '../img/symbol-defs.svg';

const allRecipesBtnEl = document.querySelector('.main-btn');
const galleryListEl = document.querySelector('.categories-gallery');
const categoriesBtnsEls = document.querySelector('.categories-btn-pn');
const gallaryFull = document.querySelector('.favorit-gallary-full');
const gallaryNull = document.querySelector('.favorit-gallary-null');
const heroImg = document.querySelector('.hero-favorites');
let parsedRecipes = JSON.parse(localStorage.getItem('favoritiesRecipes'));
let btnCateg = categoriesBtnsEls.childNodes;

const mediaQuery = window.matchMedia(
  '(min-width: 768px) and (max-width: 1280px)'
);

function handleMediaQueryChange(event) {
  if (event.matches) {
    heroImg.classList.remove('visually-hidden');
  } else if (window.matchMedia('(min-width: 1280px)').matches) {
    heroImg.classList.remove('visually-hidden');
  } else {
    heroImg.classList.add('visually-hidden');
  }
}

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);

gallaryNull.classList.add('visually-hidden');

buildGallery();

function buildGallery() {
  galleryListEl.innerHTML = createRecipeContainers(parsedRecipes);

  if (galleryListEl.children.length === 0) {
    gallaryFull.classList.add('visually-hidden');
    gallaryNull.classList.remove('visually-hidden');
  }

  allRecipesBtnEl.classList.add('btn-active');
  allRecipesBtnEl.setAttribute('disabled', '');

  const categories = [];
  parsedRecipes.forEach(({ category }) => {
    if (categories.includes(category)) {
      return;
    }
    categories.push(category);
    categoriesBtnsEls.innerHTML = categoriesBtns(categories);
  });
}

allRecipesBtnEl.addEventListener('click', handleLoadAllRecipes);

function handleLoadAllRecipes() {
  btnCateg.forEach(el => el.classList.remove('btn-active'));
  allRecipesBtnEl.classList.add('btn-active');
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
      }) => `<div id="${_id}" data-category="${category}" class="grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${preview}'); background-size: cover; background-position: center;">
        <svg class="favorit-icon-heart">
            <use href="${linkIconsFavorites}#icon-heart"></use>
        </svg>
        <div><h2 class="filters-title-recipe">${title}</h2>
        <p class="filters-description-recipe">${description}</p>
        <div class="filters-rating-wrap">
  <p class="filters-rating-recipe">${rating}</p>
  <svg class="filters-icon-rating-recipe-1 ${getRatingColorClass(rating, 1)}">
    <use href="${linkIconsFavorites}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-2 ${getRatingColorClass(rating, 2)}">
    <use href="${linkIconsFavorites}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-3 ${getRatingColorClass(rating, 3)}">
    <use href="${linkIconsFavorites}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-4 ${getRatingColorClass(rating, 4)}">
    <use href="${linkIconsFavorites}#icon-star"></use>
  </svg>
  <svg class="filters-icon-rating-recipe-5 ${getRatingColorClass(rating, 5)}">
    <use href="${linkIconsFavorites}#icon-star"></use>
  </svg>
  <button class="filters-btn-recipe" type="button">See recipe</button>
</div>
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

categoriesBtnsEls.addEventListener('click', handleCategoryRecipes);

function handleCategoryRecipes(e) {
  allRecipesBtnEl.removeAttribute('disabled', '');
  allRecipesBtnEl.classList.remove('btn-active');
  const btnCateg = categoriesBtnsEls.childNodes;
  btnCateg.forEach(el => el.classList.remove('btn-active'));
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

galleryListEl.addEventListener('click', e => {
  const svgHeart = e.target.parentNode;
  const recipeDelEl = svgHeart.parentNode;
  let activeBtn = document.getElementsByClassName('btn-active');

  parsedRecipes.forEach((el, i) => {
    if (el._id == recipeDelEl.id) {
      parsedRecipes.splice(i, 1);
    }
    localStorage.setItem('favoritiesRecipes', JSON.stringify(parsedRecipes));
  });
  parsedRecipes = JSON.parse(localStorage.getItem('favoritiesRecipes'));
  galleryListEl.innerHTML = '';

  if (activeBtn[0].innerText === 'All categories') {
    buildGallery();
  } else {
    galleryListEl.innerHTML = createRecipeContainers(
      parsedRecipes.filter(
        parsedRecipe => parsedRecipe.category === activeBtn[0].innerText
      )
    );
    if (galleryListEl.children.length === 0) {
      buildGallery();
    }
  }
});
