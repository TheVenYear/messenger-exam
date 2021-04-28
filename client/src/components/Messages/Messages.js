import { useSelector } from 'react-redux';
import instance from '../../apis';

const Messages = () => {
  const user = useSelector((state) => state.auth.user);

  const onClickHandler = async () => {
    const response = await instance.post('/test', { message: 'dsa' });
    console.log(response.data.data);
  };

  return (
    <div>
      <p>Hello {user.email} from Messages</p>
      <button onClick={onClickHandler}>Тест</button>
    </div>
  );
};

export default Messages;
