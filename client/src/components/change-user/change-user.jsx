import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../user-form';
import { changeProfile, logout } from '../../store/reducers/app.reducer';
import { Box, Button } from '@material-ui/core';

const ChangeUser = () => {
  const user = useSelector((state) => state.app.user);
  const dispatch = useDispatch();
  const initialValues = {
    ...user,
    ...user.profile,
  };

  console.log(initialValues);

  return (
    <>
      <UserForm
        initialValues={initialValues}
        onFinish={(data) => dispatch(changeProfile(data))}
      />
      <Box mt={1} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(logout())}
        >
          Выйти из аккаунта
        </Button>
      </Box>
    </>
  );
};

export default ChangeUser;
