import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  TextField,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import * as yup from 'yup';
import { useFormik } from 'formik';

import { serverURL } from '../../apis';
import { sendMessage } from '../../apis/messages.api';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Message from '../message';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const simpleBarRef = useRef(null);

  const form = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: yup.object({
      message: yup.string().required(),
    }),
    onSubmit: ({ message }) => {
      sendMessage(message);
    },
  });

  const scrollTop = () => {
    const scroll = simpleBarRef.current?.getScrollElement();
    if (!scroll) {
      return;
    }
    scroll.scrollTo({ top: scroll.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    const socket = io(serverURL, { withCredentials: true });

    socket.on('message', (data) => {
      setMessages((messagesParam) => [...messagesParam, data]);
      scrollTop();
    });

    socket.on('connection', (data) => {
      setMessages((messagesParam) => [
        ...messagesParam,
        `${data.profile?.nickname || data.email} зашёл в чат`,
      ]);
      scrollTop();
    });

    socket.on('user-leave', (data) => {
      setMessages((messagesParam) => [
        ...messagesParam,
        `${data.profile?.nickname || data.email} покинул чат`,
      ]);
      scrollTop();
    });
  }, []);

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader style={{ height: '10%' }} title="Вы вошли в комнату" />
      <SimpleBar style={{ height: '80%' }} ref={simpleBarRef}>
        {messages.map((el, index) =>
          typeof el === 'string' ? (
            <Typography
              style={{ margin: '40px 0px' }}
              color="textSecondary"
              align="center"
            >
              {el}
            </Typography>
          ) : (
            <Message key={index} user={el.user} message={el.message} />
          )
        )}
      </SimpleBar>
      <CardActions
        disableSpacing
        style={{ justifyContent: 'space-between', height: '10%' }}
      >
        <Box
          display="flex"
          component="form"
          onSubmit={form.handleSubmit}
          alignItems="center"
          width="100%"
        >
          <TextField
            fullWidth
            name="message"
            value={form.values.message}
            onChange={form.handleChange}
            variant="outlined"
            size="small"
            margin="none"
            style={{ marginRight: '10px' }}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            endIcon={<SendIcon />}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default Chat;
