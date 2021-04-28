import instance from './index';

export const fetchSignIn = async (data) => {
  const response = await instance.post('auth/sign-in', data);
  return response;
};

export const refresh = async () => {
  const response = (await instance.get('auth/refresh')).data;
  return response;
};
