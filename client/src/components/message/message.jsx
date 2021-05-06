import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  // useTheme,
} from '@material-ui/core';

const Message = () => {
  // const theme = useTheme();
  return (
    <Card
      // style={{
      //   backgroundColor: theme.palette.background.default,
      // }}
      elevation={0}
    >
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Shrimp and Chorizo Paella"
        subheader={
          <Typography style={{ fontSize: '13px' }} color="primary">
            September 14, 2016
          </Typography>
        }
      />
      <CardContent>
        <Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Message;
