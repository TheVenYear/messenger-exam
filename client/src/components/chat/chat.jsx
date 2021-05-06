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
import React from 'react';
import Message from '../message';

const Chat = () => {
  return (
    <Card>
      <Grid
        style={{ height: 'inherit' }}
        container
        direction="column"
        justify="space-between"
      >
        <Grid item>
          <CardHeader title="Вы вошли в комнату" />
        </Grid>
        <Grid item>
          <CardContent>
            <GridList style={{ height: '60vh' }} cols={1}>
              {[...new Array(5)].map((el) => (
                <GridListTile key={el}>
                  <Message />
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
            <Box display="flex" width="100%">
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                style={{ marginRight: '10px' }}
              />
              <Button
                variant="contained"
                color="primary"
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
