import { me } from '../../apis/auth.api';

const SET_USER = 'app/user/SET';
const SET_IS_INITIALIZED = 'app/isInitialized/SET';

const initialState = {
  user: null,
  isInitialized: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.payload };
    default:
      return state;
  }
};

export default authReducer;

export const setUser = (payload) => ({ type: SET_USER, payload });

const setIsInitialized = (payload) => ({
  type: SET_IS_INITIALIZED,
  payload,
});

export const initializeApp = () => async (dispatch) => {
  const response = await me();
  dispatch(setIsInitialized(true));
  if (!response.data) {
    return;
  }
  dispatch(setUser(response.data));
};
