import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { NavLink, Redirect } from 'react-router-dom';

import { fetchSignIn } from '../../apis/auth.api';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/reducers/app.reducer';

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { setErrors }) => {
      const response = await fetchSignIn(values);

      if (!response.data) {
        setErrors(response.errors);
        console.log(response);
        return;
      }

      dispatch(setUser(response.data));
    },
  });
  return user ? (
    <Redirect to="/" />
  ) : (
    <Container maxWidth="xs">
      <Typography variant="h5">Войдите в систему</Typography>
      <form onSubmit={form.handleSubmit}>
        <FormGroup>
          <TextField
            error={!!form.errors.email}
            helperText={form.errors.email}
            value={form.values.email}
            onChange={form.handleChange}
            label="Email"
            name="email"
            type="email"
          />
          <TextField
            error={!!form.errors.password}
            helperText={form.errors.password}
            value={form.values.password}
            onChange={form.handleChange}
            label="Пароль"
            name="password"
            type="password"
          />
          <FormControl margin="normal">
            <Button type="submit">Отправить</Button>
          </FormControl>
          <FormControl>
            <Box mx="auto">
              <Link
                style={{ textAlign: 'center' }}
                component={NavLink}
                to="/sign-up"
              >
                Нет аккаунта? Создайте его прямо сейчас!
              </Link>
            </Box>
          </FormControl>
          {form.errors.global && (
            <FormControl margin="normal">
              <Alert variant="outlined" severity="error">
                {form.errors.global}
              </Alert>
            </FormControl>
          )}
        </FormGroup>
      </form>
    </Container>
  );
};

export default Login;
