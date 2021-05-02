import { useSelector } from 'react-redux';
import { Box, Button, TextField } from '@material-ui/core';

import instance from '../../apis';
import { useFormik } from 'formik';

const Messages = () => {
  const user = useSelector((state) => state.auth.user);

  const onClickHandler = async () => {
    const response = await instance.post('/test', { message: 'dsa' });
    console.log(response.data.data);
  };

  const form = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <p>{user.email} from Messages</p>
      <Box mr={3}>
        <form onSubmit={form.handleSubmit}>
          <TextField
            name="message"
            value={form.values.message}
            onChange={form.handleChange}
            variant="outlined"
            label="Текст сообщения"
            size="small"
          />{' '}
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickHandler}
          >
            Отправить
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Messages;
