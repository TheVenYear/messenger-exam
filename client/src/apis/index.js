import axios from 'axios';

import store from '../store';
import { setUser } from '../store/reducers/app.reducer';

export const CONFIG = {
  baseURL: '/api/',
  validateStatus: (status) => status < 500,
  transformResponse: (response) => {
    const transformed = JSON.parse(response);
    if (transformed.errors.length < 1) {
      return transformed;
    }

    let newData = { data: transformed.data, errors: {} };

    transformed.errors.forEach((error) => {
      for (const key in error) {
        if (!newData.errors[key]) {
          newData.errors[key] = [];
        }

        newData.errors[key].push(error[key]);
      }
    });

    return newData;
  },
};

const instance = axios.create(CONFIG);

export const setInterceptor = (dispatch) => {
  instance.interceptors.response.use(async (response) => {
    store.dispatch(setUser(null));
    // if (response.status === 401) {
    //   return await axios.request(response.config);
    // }
    return response;
  });
};

export default instance;
