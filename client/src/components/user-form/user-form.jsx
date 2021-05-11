import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

import Thumb from '../thumb';
import { fetchSignUp } from '../../apis/auth.api';

const UserForm = ({ type = 'register' }) => {
  const form = useFormik({
    initialValues: {
      avatar: null,
    },
    validationSchema: yup.object({
      avatar: yup.mixed(),
      email: yup
        .string()
        .email('Некорректный email')
        .required('Email обязательное поле'),
      password: yup
        .string()
        .min(10, 'Пароль должен содержать минимум 10 символов')
        .required('Пароль обязательное поле'),
    }),
    onSubmit: (values) => {
      let formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      fetchSignUp(formData);
    },
  });
  console.log(type);
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Создайте свой аккаунт</Typography>
      <form onSubmit={form.handleSubmit}>
        <FormGroup>
          <TextField
            onChange={form.handleChange}
            error={form.touched && !!form.errors.email}
            helperText={form.errors.email}
            value={form.values.email}
            name="email"
            label="Email"
          />
          <TextField
            onChange={form.handleChange}
            value={form.values.password}
            error={form.touched && !!form.errors.password}
            helperText={form.errors.password}
            name="password"
            label="Пароль"
            type="password"
          />
          <TextField
            onChange={form.handleChange}
            value={form.values.nickname}
            name="nickname"
            label="Прозвище"
          />
          <InputMask
            onChange={form.handleChange}
            mask="+7 (999) 999 99 99"
            value={form.values.phone}
            name="phone"
            label="Номер телефона"
            maskChar=""
          >
            {(props) => <TextField {...props} />}
          </InputMask>
          <FormControl>
            <Box mx="auto">
              <Thumb image={form.values.avatar} />
            </Box>
          </FormControl>
          <FormControl margin="dense">
            <input
              accept="image/*"
              id="avatar"
              onChange={(e) => {
                form.setFieldValue('avatar', e.currentTarget.files[0]);
              }}
              name="avatar"
              multiple
              type="file"
              style={{ display: 'none' }}
            />
            <Box mx="auto">
              <label htmlFor="avatar">
                <Button
                  style={{ marginRight: '10px' }}
                  variant="outlined"
                  color="primary"
                  size="small"
                  component="span"
                >
                  Выберите изображение профиля
                </Button>
              </label>
            </Box>
          </FormControl>
          <FormControl>
            <Button variant="contained" type="submit">
              Отправить
            </Button>
          </FormControl>
        </FormGroup>
      </form>
    </Container>
  );
};

UserForm.propTypes = {
  type: PropTypes.oneOf(['register', 'update']),
};

UserForm.defaultProps = {
  type: 'register',
};

export default UserForm;
