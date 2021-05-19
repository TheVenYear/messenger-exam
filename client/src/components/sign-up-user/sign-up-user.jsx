import React from 'react';
import * as yup from 'yup';

import { fetchSignUp } from '../../apis/auth.api';
import UserForm from '../user-form';

const SignUpUser = () => {
  const validationSchema = yup.object({
    avatar: yup.mixed(),
    email: yup
      .string()
      .email('Некорректный email')
      .required('Email обязательное поле'),
    password: yup
      .string()
      .min(10, 'Пароль должен содержать минимум 10 символов')
      .required('Пароль обязательное поле'),
  });

  return (
    <UserForm
      validationSchema={validationSchema}
      onFinish={(data) => {
        fetchSignUp(data);
        history.push('/');
      }}
    />
  );
};

export default SignUpUser;
