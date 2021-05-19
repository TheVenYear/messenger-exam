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
    <Box display="flex" flexDirection="column" height="100vh">
      <Box>
        <Header />
      </Box>
      <Box height="100%" display="flex" mt={2} mb={1}>
        <Container maxWidth="md">
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
    </Box>
  );
};

export default Content;
