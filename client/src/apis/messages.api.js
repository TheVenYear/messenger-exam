import instance from '.';

export const sendMessage = async (message) =>
  instance.post('messages/', { message });
