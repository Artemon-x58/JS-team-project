console.log('how are you');

import { BackendAPI } from './tasty-backend-api';

const backendReturnData = new BackendAPI();
backendReturnData.recipeID = '6462a8f74c3d0ddd28897fb8';
backendReturnData.userRatings = {
  rate: 4,
  email: 'test@gmail.com',
};
backendReturnData.userOrder = {
  name: 'Ivetta',
  phone: '+380000000000',
  email: 'test@gmail.com',
  comment: 'So delicious',
};
const resp = backendReturnData
  .passRating()
  .then(resp => console.log(resp.data))
  .catch(console.warn);
