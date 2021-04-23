import io from 'socket.io-client';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios
      .post('/api/auth/sign-in', {
        email: 'admin@admin.com',
        password: '1234567890',
      })
      .then(() => {
        const socket = io.connect('/');

        socket.on('message', (data) => {
          console.log(data);
        });

        socket.on('unauthorized', () => {
          console.log('unauthorized');
        });
      });
  }, []);

  const onClickHandler = () => {
    axios.post('/api/test', { message: 'Хер' });
  };

  return <button onClick={onClickHandler}>Отправить сообщение</button>;
}

export default App;
