import axios from 'axios';

export const serverURL = '';
export const CONFIG = {
  baseURL: serverURL + 'api/',
  withCredentials: true,
  validateStatus: (status) => status < 500,
  transformResponse: (response) => {
    const transformed = JSON.parse(response);
    if (transformed.errors.length < 1) {
      return transformed;
    }
    const newData = { data: transformed.data, errors: {} };

    transformed.errors.forEach((error) => {
      Object.keys(error).forEach((key) => {
        if (!newData.errors[key]) {
          newData.errors[key] = [];
        }

        newData.errors[key].push(error[key]);
      });
    });

    return newData;
  },
};

const instance = axios.create(CONFIG);

export const setInterceptor = (setUser) => {
  instance.interceptors.response.use(async (response) => {
    if (response.status === 401) {
      const refreshResponse = await axios.request({
        ...CONFIG,
        url: 'auth/refresh',
        method: 'GET',
      });

      if (refreshResponse.status === 401) {
        setUser(null);
        return response;
      }

      return axios.request(response.config);
    }

    return response;
  });
};

export default instance;
