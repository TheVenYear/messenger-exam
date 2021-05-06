import React from 'react';
import Header from '../header';
import { Box, Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Login from '../login';
import PrivateRoute from '../private-route';
import Chat from '../chat';

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
