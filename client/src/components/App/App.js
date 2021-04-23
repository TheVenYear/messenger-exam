import io from 'socket.io-client';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const socket = io.connect('http://localhost:8000');

    socket.on('message', (data) => {
      console.log(data);
    });
  }, []);

  const onClickHandler = () => {
    axios.post('/api/test', { message: 'Хер' });
  };

  return <button onClick={onClickHandler}>Отправить сообщение</button>;
}

export default App;
