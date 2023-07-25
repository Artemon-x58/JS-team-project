'use strict';
import axios from 'axios';

export class BackendAPI {
  #BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';

  page = 1;
  limit = 6;
  category = '';
  title = '';
  time = '';
  area = '';
  ingredient = '';
  recipeID = "6462a8f74c3d0ddd28898040";
  userRatings = {
    rate: 5,
    email: '',
  };
  // recipeID = null;
  // userRatings = {
  //   name: '',
  //   phone: '',
  //   email: '',
  //   comment: '',
  // };

  // Перелік подій(майстер-класів)
  searchMasterClass() {
    return axios.get(`${this.#BASE_URL}events`);
  } // const backendReturnData = new BackendAPI();
  // const resp = backendReturnData.searchMasterClass()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Перелік категорій (рецептів)
  searchListCategories() {
    return axios.get(`${this.#BASE_URL}categories`);
  } // const backendReturnData = new BackendAPI();
  // const resp = backendReturnData. searchListCategories()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Перелік рецептів з фільтрацією по категорії, інгредієнту, ключовому слову, часу та районах з урахування кількості рецептів у запиті та порядкового номеру сторінки

  searchFilterRecipes() {
    return axios.get(
      `${this.#BASE_URL}recipes?category=${this.category}&page=${
        this.page
      }&limit=${this.limit}&time=${this.time}&area=${this.area}&ingredient=${
        this.ingredient
      }&title=${this.title}`
    );
  }
  // const backendReturnData = new BackendAPI();
  // backendReturnData.category = из List.categories.name;
  // backendReturnData.page = 1 (с неё начинаем перелистывать для поиска);
  // backendReturnData.limit = 6 (должна соответствовать текущей пагинации?);
  // backendReturnData.time = из Filter.time (все рецепты до указанного времени включительно?);
  // backendReturnData.ingredient = из Filter.ingredient.ID;
  // backendReturnData.category = из Filter.Area.name;
  // const resp = backendReturnData.searchFilterRecipes()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Все рецепты, должны открываться по кнопке "All categories" и при поиске по наименованию из фильтра?
  
  searchAllRecipes() {
    const limit = getLimitFilters();

  return axios.get(
    `${this.#BASE_URL}recipes?page=${this.page}&limit=${limit}`
  );
  }
  // backendReturnData.page = 1 (с неё начинаем пагинацию);
  // backendReturnData.limit = 6 (количество рецептов на странице);
  // const backendReturnData = new BackendAPI();
  // const resp = backendReturnData.searchAllRecipes()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Популярні рецепти
  searchPopularRecipes() {
    // const limit = getLimitPopular()
    return axios.get(`${this.#BASE_URL}recipes/popular`);
  }
  // const backendReturnData = new BackendAPI();
  // const resp = backendReturnData.searchPopularRecipes()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Детальна інформація про рецепт
  searchRecipeID() {
    //tasty-treats-backend.p.goit.global/api/recipes/ recipeID
    https: return axios.get(`${this.#BASE_URL}recipes/${this.recipeID}`);
  }
  // const backendReturnData = new BackendAPI();
  // backendReturnData.recipeID = ID при клике на рецепт;
  // const resp = backendReturnData.searchPopularRecipes()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Перелік інгредієнтів (Filter.ingredient)
  searchingredients() {
    return axios.get(`${this.#BASE_URL}ingredients`);
  }
  // const backendReturnData = new BackendAPI();
  // const resp = backendReturnData.searchingredients()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Перелік районів (Filter.Area)
  searchAreas() {
    return axios.get(`${this.#BASE_URL}areas`);
  }
  // const backendReturnData = new BackendAPI();
  // const resp = backendReturnData.searchAreas()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Додавання рейтингу окремому рецепту
  passRating() {
    return axios.patch(
      // tasty-treats-backend.p.goit.global/api/recipes/ recipeID /rating
      `${this.#BASE_URL}recipes/${this.recipeID}/rating`, this.userRatings
    );
    // const backendReturnData = new BackendAPI();
    // backendReturnData.recipeID = ID при клике на рецепт;
    // backendReturnData.userRatings = {
    //   rate: из form (номер),
    //   email: 'из form' (строка),
  }
  // const resp = backendReturnData.passRating()
  // .then(resp => console.log(resp.data))
  // .catch(console.warn);

  // Додавання замовлення
  passOrder() {
    return axios.post(
      //tasty-treats-backend.p.goit.global/api/orders
      `${this.#BASE_URL}orders/add,${this.userOrder}`
    );
    // const backendReturnData = new BackendAPI();

    //   backendReturnData.userOrder = {
    //   name: 'из form' (строка),
    //   phone: 'из form' (строка),
    //   email: 'из form' (строка),
    //   comment: 'из form' (строка, не обязательно к заполнению),
    // };

    // const resp = backendReturnData.passOrder()
    // .then(resp => console.log(resp.data))
    // .catch(console.warn);
  }

  
}
function getLimitFilters() {
  if (window.innerWidth < 768) { // Мобильные устройства
    return 6;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) { // Планшеты
    return 8;
  } else { // Десктопные устройства
    return 9;
  }
}

// function getLimitPopular() {
//   if (window.innerWidth < 768) { // Мобильные устройства
//     return 2;
//   }  // Десктопные устройства
//     return 4;
    
// }
