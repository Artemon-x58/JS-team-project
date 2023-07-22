const recipeCard = document.querySelector('.kz-favorite-recipes');
const categoriesFavorite = document.querySelector('.kz-btn-favorite-recipes');
const btnAllCategories = document.querySelector('.btn-all');
const recipes = [
  {
    _id: '6462a8f74c3d0ddd28898040',
    title: 'Burek',
    description:
      "Burek is a traditional Balkan pastry made with phyllo dough and a savory filling, usually of meat, cheese, or vegetables. It's a popular street food in the region and can be enjoyed as a snack or a meal.",
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561437/n2azvqwqwoggte9tevai.jpg',
    popularity: 518.7,
  },
  {
    _id: '6462a8f74c3d0ddd28898046',
    title: 'Fish fofos',
    description:
      'Fish fofos are a popular Portuguese dish of fish patties made with mashed potatoes, cod or hake, and herbs, fried until golden brown and crispy on the outside, soft and moist on the inside.',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561436/yb6szdkd5pj1izzevumw.jpg',
    popularity: 495,
  },
  {
    _id: '6462a8f74c3d0ddd28898056',
    title: 'Brie wrapped in prosciutto & brioche',
    description:
      'A decadent French appetizer made with brie cheese wrapped in prosciutto and baked in a buttery brioche dough.',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561361/pkir13tenasy2ptjcavy.jpg',
    popularity: 465,
  },
  {
    _id: '6462a8f74c3d0ddd288980c3',
    title: 'Portuguese prego with green piri-piri',
    description:
      'Portuguese prego with green piri-piri is a traditional sandwich of steak marinated in garlic and olive oil, served on a roll with spicy piri-piri sauce and sautéed onions.',
    preview:
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561438/luxyx99bpydbz6avyeoj.jpg',
    popularity: 445,
  },
];

const categories = [
  { _id: '6462a6cd4c3d0ddd28897f8e', name: 'Beef' },
  { _id: '6462a6cd4c3d0ddd28897f95', name: 'Breakfast' },
  { _id: '6462a6cd4c3d0ddd28897f8d', name: 'Chicken' },
  // { _id: '6462a6cd4c3d0ddd28897f8f', name: 'Dessert' },
  // { _id: '6462a6cd4c3d0ddd28897f97', name: 'Goat' },
  // { _id: '6462a6cd4c3d0ddd28897f8b', name: 'Lamb' },
  // { _id: '6462a6cd4c3d0ddd28897f93', name: 'Miscellaneous' },
  // { _id: '6462a6cd4c3d0ddd28897f94', name: 'Pasta' },
  // { _id: '6462a6cd4c3d0ddd28897f91', name: 'Pork' },
  // { _id: '6462a6cd4c3d0ddd28897f8a', name: 'Seafood' },
  // { _id: '6462a6cd4c3d0ddd28897f96', name: 'Side' },
  // { _id: '6462a6cd4c3d0ddd28897f98', name: 'Soup' },
  // { _id: '6462a6cd4c3d0ddd28897f8c', name: 'Starter' },
  // { _id: '6462a6cd4c3d0ddd28897f90', name: 'Vegan' },
  // { _id: '6462a6cd4c3d0ddd28897f92', name: 'Vegetarian' },
];

console.log(recipes);

function createMarkup() {
  return recipes
    .map(
      ({
        title,
        description,
        preview,
      }) => `<div class="kz-card-favorite" style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.6) 0%, rgba(5, 5, 5, 0) 100%), url(${preview}), lightgray -25px -10px / 116.716% 114.018% no-repeat; width: 335px; height: 335px; flex-shrink: 0; border-radius: 8px;"><div class="favorite-text-btn"><p class="kz-favorite-title">${title}</p>
  <p class="kz-favorite-description">${description}</p></div><div class="kz-favorite-rating-btn">
  <!-- add ranking and stars -->
  <button class="kz-btn-see-recipe">See recipe</button></div></div>`
    )
    .join('');
}

function newCard() {
  return (recipeCard.innerHTML = createMarkup());
}

newCard();

console.log(categories);
console.log(categories.name);
function createCategoriesMarkup() {
  return categories
    .map(({ name }) => `<button type="button" class="">${name}</button>`)
    .join('');
}

function newCardCategories() {
  return (categoriesFavorite.innerHTML += createCategoriesMarkup());
}

newCardCategories();
