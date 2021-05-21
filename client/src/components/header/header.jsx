import {
  AppBar,
  Avatar,
  Box,
  Container,
  Icon,
  Link,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/reducers/app.reducer';

const Header = () => {
  const user = useSelector((state) => state.app.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar color="secondary">
      <Container maxWidth="md">
        <Toolbar disableGutters variant="dense">
          <Box display="flex" width="100%" justifyContent="space-between">
            <Box display="flex" alignItems="center">
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
            </Box>

            {user && (
              <Link color={theme.palette.background.default}>
                <Box
                  display="flex"
                  alignItems="center"
                  onClick={() => dispatch(logout())}
                  style={{ cursor: 'pointer' }}
                >
                  <Box marginRight="8px" fontWeight={500}>
                    Выйти
                  </Box>
                  <Avatar
                    src={user.profile.avatar}
                    alt="User avatar"
                    style={{ width: '30px', height: '30px' }}
                  />
                </Box>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
