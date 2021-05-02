import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from '@material-ui/core';

const Login = () => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Войдите в систему</Typography>
      <FormGroup onSubmit={form.handleSubmit}>
        <TextField
          size="small"
          margin="normal"
          variant="outlined"
          value={form.values.email}
          onChange={form.handleChange}
          label="Email"
          name="email"
        />
        <TextField
          margin="normal"
          size="small"
          variant="outlined"
          value={form.values.password}
          onChange={form.handleChange}
          label="Пароль"
          name="password"
        />
        <FormControl margin="normal">
          <Button size="small" variant="contained" color="primary">
            Отправить
          </Button>
        </FormControl>
      </FormGroup>
    </Container>
  );
};

export default Login;
