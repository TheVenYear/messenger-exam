import {
  Container,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  AppBar,
  Toolbar,
  Box,
  Link,
} from '@material-ui/core';
import { teal, yellow } from '@material-ui/core/colors';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initializeApp } from '../store/reducers/app.reducer';
import Messages from './Messages/Messages';
import Login from './shared/Login/Login';

const App = () => {
  const isInitialized = useSelector((state) => state.auth.isInitialized);
  const dispatch = useDispatch();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: prefersDarkMode ? yellow[400] : teal[900],
          },
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="inherit">
        <Container maxWidth="md">
          <Toolbar unselectable={true}>
            <Link variant="h6">Readeractive</Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <Box my={2}>
          {isInitialized ? (
            <Login>
              <Messages />
            </Login>
          ) : (
            'loading'
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
