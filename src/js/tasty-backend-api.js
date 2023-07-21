'use strict';
import axios from 'axios';

export class BackendAPI {
  #BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';

  //   query = null;
  //   page = 1;
  //   per_page = 40;

  // Перелік подій(майстер-класів)
  searchMasterClass() {
    return axios.get(`${this.#BASE_URL}events`);
  } // const backendReturnData = new BackendAPI();
  // const data = backendReturnData.searchMasterClass();
  // console.log(data);

  // Все рецепты, должны открываться по кнопке "All categories"
  searchAllRecipes() {
    return axios.get(`${this.#BASE_URL}recipes`);
  }

  // не могу найти документации, чтобы понять, как можно менять параметр page и limit(perPage)
  // const backendReturnData = new BackendAPI();
  // const data = backendReturnData.searchAllRecipes();
  // console.log(data);
}
