import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as yup from 'yup';
import { fetchSignIn } from '../../../../apis/auth.api';
import { setUser } from '../../../../store/reducers/app.reducer';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: 'adminadmin',
    },
    onSubmit: async (data, { setErrors }) => {
      const response = await fetchSignIn(data);
      const errors = response.errors;
      setErrors(errors);

      dispatch(setUser(response.data));
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required('Это поле обязательно')
        .email('Неверный email'),
    }),
  });

  useEffect(() => {
    if (formik.errors.global) {
      alert(formik.errors.global);
    }
  }, [formik.errors.global]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched && (
        <div>{formik.errors.email}</div>
      )}
      <label htmlFor="password">Пароль</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched && (
        <div>{formik.errors.password}</div>
      )}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default LoginForm;
