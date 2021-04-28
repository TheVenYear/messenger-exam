import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from '../store/reducers/app.reducer';
import Messages from './Messages/Messages';
import Login from './shared/Login/Login';

const App = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return (
    <>
      {isInitialized ? (
        <Login>
          <Messages />
        </Login>
      ) : (
        'loading'
      )}
    </>
  );
};

export default App;
