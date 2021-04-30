import instance from './index';

export const fetchSignIn = async (data) => {
  const response = await instance.post('auth/sign-in', data);
  return response.data;
};

export const refresh = async () => {
  const response = await instance.get('auth/refresh');
  return response.data;
};

export const me = async () => {
  const response = await instance.get('auth/me');
  return response.data;
};
