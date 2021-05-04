import React, { useEffect } from 'react';
import { grey, orange } from '@material-ui/core/colors';

import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  Container,
  Box,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './login/login';
import Header from './header/header';
import { initializeApp } from '../store/reducers/app.reducer';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './private-route/private-route';
import Chat from './chat/chat';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => dispatch(initializeApp()), 2000);
  }, []);

  const isInitialized = useSelector((state) => state.app.isInitialized);
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createMuiTheme({
    palette: {
      type: isDark ? 'dark' : 'light',
      primary: {
        main: orange[800],
      },
      secondary: {
        main: isDark ? grey[50] : grey[900],
      },
    },
    overrides: {
      MuiButton: {
        sizeSmall: {
          height: '40px',
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {isInitialized ? (
          <>
            <Header user="dsa" />
            <Container maxWidth="md">
              <Box mt={5}>
                <Switch>
                  <Route path="/sign-in">
                    <Login />
                  </Route>
                  <PrivateRoute path="/">
                    <Chat />
                  </PrivateRoute>
                </Switch>
              </Box>
            </Container>
          </>
        ) : (
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
          >
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
