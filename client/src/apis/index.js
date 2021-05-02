import axios from 'axios';

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
        if (newData.errors.hasOwnProperty(key) && error.hasOwnProperty(key)) {
          if (!newData.errors[key]) {
            newData.errors[key] = [];
          }

          newData.errors[key].push(error[key]);
        }
      }
    });

    return newData;
  },
};

const instance = axios.create(CONFIG);

export const setInterceptor = (dispatch) => {
  instance.interceptors.response.use(async (response) => {
    if (response.status === 401) {
      const refreshResponse = await axios.request({
        ...CONFIG,
        url: 'auth/refresh',
        method: 'GET',
      });

      if (refreshResponse.status === 401) {
        dispatch(setUser(null));
        return response;
      }

      return await axios.request(response.config);
    }

    return response;
  });
};

export default instance;
