import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInterceptor } from '../apis';

import { initializeApp } from '../store/reducers/app.reducer';
import Messages from './Messages/Messages';
import Login from './shared/Login/Login';

const App = () => {
  const isInitialized = useSelector((state) => state.auth.isInitialized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
    setInterceptor(dispatch);
  }, [dispatch]);

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
