import React from 'react';
import { grey, orange } from '@material-ui/core/colors';
import ChatIcon from '@material-ui/icons/Chat';
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Icon,
} from '@material-ui/core';

import Login from './login/login';

const App = () => {
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
      <AppBar position="static" color="secondary">
        <Container maxWidth="md">
          <Toolbar>
            <Icon>
              <ChatIcon />
            </Icon>

            <Typography variant="h6">
              <Box fontWeight={600}>Readeractive</Box>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        <Box mt={5}>
          <Login />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
