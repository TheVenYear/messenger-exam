import {
  AppBar,
  Avatar,
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
import { useSelector } from 'react-redux';
import Media from 'react-media';

const Header = () => {
  const user = useSelector((state) => state.app.user);
  return (
    <AppBar position="relative" color="secondary">
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
              <Typography>
                <Link color="inherit" component={NavLink} to="/">
                  <Box display="flex" alignItems="center">
                    <Media queries={{ small: '(max-width: 380px)' }}>
                      {(matches) => (
                        <>
                          {!matches.small && (
                            <Box marginRight="8px" fontWeight={500}>
                              {user.profile.nickname || user.email}
                            </Box>
                          )}

                          <Avatar
                            src={user.profile.avatar}
                            alt="User avatar"
                            style={{ width: '30px', height: '30px' }}
                          />
                        </>
                      )}
                    </Media>
                  </Box>
                </Link>
              </Typography>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
