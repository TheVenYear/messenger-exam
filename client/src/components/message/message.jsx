import PropTypes from 'prop-types';
import React from 'react';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import moment from 'moment';

const Message = ({ user, message }) => {
  return (
    <Card elevation={0}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar src={user.profile.avatar || '/broken-image.jpg'} />}
          title={user.profile.nickname || user.email}
          subheader={
            <Typography
              style={{ fontSize: '13px', wordWrap: 'break-word' }}
              color="primary"
            >
              {moment(message.postedAt).format('LLLL')}
            </Typography>
          }
        />
        <CardContent>
          <Typography component="div" style={{ wordWrap: 'break-word' }}>
            {message.text}
          </Typography>
        </CardContent>
      </CardActionArea>
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
