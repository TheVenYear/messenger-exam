import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

const Chat = () => {
  return (
    <Card style={{ minHeight: '100%', alignContent: 'space-between' }}>
      <CardHeader title="Общий лайв чат" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ justifyContent: 'space-between' }}>
        <Grid container justify="flex-end" spacing={2}>
          <Grid item>
            <TextField variant="outlined" size="small" />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<SendIcon />}
            >
              Отправить
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Chat;
