import { Box, Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';

import Chat from '../chat';
import Login from '../login';
import PrivateRoute from '../private-route';
import UserForm from '../user-form';
import ChangeUser from '../change-user';
import SignUpUser from '../sign-up-user/sign-up-user';

const Content = () => {
  return (
    <>
      <Header />
      <Box height="calc(100vh - 70px)" marginTop="60px" mb="10px">
        <Container style={{ height: 'inherit' }} maxWidth="md">
          <Switch>
            <Route path="/sign-in">
              <Login />
            </Route>
            <PrivateRoute path="/update">
              <UserForm type="update" />
            </PrivateRoute>
            <Route path="/sign-up">
              <SignUpUser />
            </Route>
            <PrivateRoute path="/change-profile">
              <ChangeUser />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Chat />
            </PrivateRoute>
          </Switch>
        </Container>
      </Box>
    </>
  );
};

export default Content;
