import PropTypes from 'prop-types';
import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';

const Message = ({ user, message }) => {
  return (
    <Card elevation={0}>
      <CardHeader
        avatar={<Avatar src={user.profile.avatar || '/broken-image.jpg'} />}
        title={user.profile.nickname || user.email}
        subheader={
          <Typography style={{ fontSize: '13px' }} color="primary">
            {message}
          </Typography>
        }
      />
      <CardContent>
        <Typography>{message}</Typography>
      </CardContent>
    </Card>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  user: PropTypes.shape({
    email: PropTypes.string,
    profile: PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string,
    }),
  }),
};

export default Message;
