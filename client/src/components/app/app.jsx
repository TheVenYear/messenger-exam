import React, { useEffect } from 'react';
import { grey, orange } from '@material-ui/core/colors';
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { initializeApp } from '../../store/reducers/app.reducer';
import Content from '../content';

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
    props: {
      MuiTextField: {
        size: 'small',
        variant: 'outlined',
        color: 'primary',
      },
      MuiFormControl: {
        margin: 'normal',
      },
      MuiButton: {
        variant: 'contained',
        color: 'primary',
        size: 'small',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {isInitialized ? (
          <Content />
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
