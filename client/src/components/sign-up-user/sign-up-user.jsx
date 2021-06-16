import React from 'react';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import { fetchSignUp } from '../../apis/auth.api';
import UserForm from '../user-form';

const SignUpUser = () => {
  const history = useHistory();
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
      onFinish={async (data, setErrors) => {
        const response = await fetchSignUp(data);
        console.log(response.errors);
        if (response.errors.email) {
          setErrors(response.errors);
          return;
        }
        history.push('/');
      }}
    />
  );
};

export default SignUpUser;
