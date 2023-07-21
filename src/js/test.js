console.log('how are you');

import { BackendAPI } from './tasty-backend-api';

const backendReturnData = new BackendAPI();
const data = backendReturnData.searchMasterClass();
console.log(data);
