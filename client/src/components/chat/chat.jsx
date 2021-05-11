import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  GridList,
  GridListTile,
  TextField,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { serverURL } from '../../apis';
import { sendMessage } from '../../apis/messages.api';

import Message from '../message';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io(serverURL, { withCredentials: true });

    socket.on('message', (data) => {
      setMessages((messagesParam) => [...messagesParam, data]);
    });
  }, []);

  const onClickHandler = () => {
    sendMessage(inputValue);
  };

  console.log(messages);
  return (
    <Card>
      <Grid style={{ height: 'inherit' }} container direction="column">
        <Grid item>
          <CardHeader title="Вы вошли в комнату" />
        </Grid>
        <Grid item>
          <CardContent>
            <GridList
              cellHeight="100px"
              spacing={1}
              style={{ height: '60vh' }}
              cols={1}
            >
              {messages.map((el, index) => (
                <GridListTile key={index}>
                  <Message user={el.user} message={el.message} />
                </GridListTile>
              ))}
            </GridList>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions
            disableSpacing
            style={{ justifyContent: 'space-between' }}
          >
            <Box display="flex" alignItems="center" width="100%">
              <TextField
                fullWidth
                value={inputValue}
                onChange={(value) => setInputValue(value.target.value)}
                variant="outlined"
                size="small"
                margin="none"
                style={{ marginRight: '10px' }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={onClickHandler}
                size="small"
                endIcon={<SendIcon />}
              />
            </Box>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Chat;
