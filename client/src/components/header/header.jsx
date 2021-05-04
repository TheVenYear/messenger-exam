import {
  AppBar,
  Box,
  Container,
  Icon,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" color="secondary">
    <Container maxWidth="md">
      <Toolbar disableGutters variant="dense">
        <Icon>
          <ChatIcon />
        </Icon>
        <Typography align="center" variant="h6">
          <Box fontWeight={600}>
            <Link color="inherit" component={NavLink} to="/">
              Readeractive
            </Link>
          </Box>
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
