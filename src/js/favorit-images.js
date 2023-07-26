const allRecipesEl = document.querySelector('.main-btn');
const galleryListEl = document.querySelector('.categories-gallery');
const categoriesBtnsEls = document.querySelector('.categories-btn-pn');
const gallaryFull = document.querySelector('.favorit-gallary-full');
const gallaryNull = document.querySelector('favorit-gallary-null');
const heroImg = document.querySelector('.hero-favorites');

heroImg.hidden = false;

const parsedRecipes = JSON.parse(localStorage.getItem('favoritiesRecipes'));

galleryListEl.innerHTML = createRecipeContainers(parsedRecipes);

if (galleryListEl.children.length === 0) {
  if (window.innerWidth >= 768) {
    heroImg.hidden = true;
  }
  heroImg.hidden = false;
  gallaryFull.hidden = true;
  gallaryNull.hidden = false;
}

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
      }) => `<div id="${_id}" data-category="${category}" class="grid-item" style="background-image: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 0%, rgba(5, 5, 5, 0.00) 100%), url('${preview}'); background-size: cover; background-position: center;">
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

console.log(galleryListEl);

galleryListEl.addEventListener('click', e => {
  // console.log(e.target.parentNode)
  const svgHeart = e.target.parentNode;
  svgHeart.classList.toggle('filters-icon-heart-toggle');

  const parentSvgHeart = svgHeart.parentNode;
  const iconHeart = parentSvgHeart.querySelector('.filters-icon-heart');
  const titleCard = parentSvgHeart.querySelector('.filters-title-recipe');
  const descriptionCard = parentSvgHeart.querySelector(
    '.filters-description-recipe'
  );
  const numberRatingCard = parentSvgHeart.querySelector(
    '.filters-rating-recipe'
  );
  const data = parentSvgHeart.getAttribute('data-category');
  // console.log(parentSvgHeart)
  const urlForPreview = parentSvgHeart.style.backgroundImage;
  // console.log(parentSvgHeart)
  const parentSvgHeaartData = {
    _id: parentSvgHeart.id,
    title: titleCard.textContent,
    description: descriptionCard.textContent,
    rating: numberRatingCard.textContent,
    preview: urlForPreview.match(/url\(['"]?([^'"]+)['"]?\)/)[1],
    category: data,
  };

  if (svgHeart.classList.contains('filters-icon-heart-toggle')) {
    const isRecipeAlreadyAdded = favoritiesRecipes.some(
      item => item._id === parentSvgHeaartData._id
    );
    if (!isRecipeAlreadyAdded) {
      favoritiesRecipes.push(parentSvgHeaartData);
      localStorage.setItem(
        'favoritiesRecipes',
        JSON.stringify(favoritiesRecipes)
      );
    }
    // favoritiesRecipes.push(parentSvgHeaartData)
  } else {
    favoritiesRecipes = favoritiesRecipes.filter(
      item => item._id !== parentSvgHeaartData._id
    );
    localStorage.setItem(
      'favoritiesRecipes',
      JSON.stringify(favoritiesRecipes)
    );
  }
});
