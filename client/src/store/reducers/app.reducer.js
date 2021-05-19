import { setInterceptor } from '../../apis';
import { fetchChangeProfile, fetchLogout, me } from '../../apis/auth.api';

const SET_USER = 'app/user/SET';
const SET_IS_INITIALIZED = 'app/isInitialized/SET';

const initialState = {
  user: null,
  isInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: action.payload };
    default:
      return state;
  }
};

export default appReducer;

export const setUser = (payload) => ({ type: SET_USER, payload });

const setIsInitialized = (payload) => ({
  type: SET_IS_INITIALIZED,
  payload,
});

export const initializeApp = () => async (dispatch) => {
  setInterceptor((user) => dispatch(setUser(user)));

  const response = await me();

  if (!response.data) {
    dispatch(setIsInitialized(true));
    return;
  }

  dispatch(setUser(response.data));
  dispatch(setIsInitialized(true));
};

export const changeProfile = (data) => async (dispatch) => {
  const response = await fetchChangeProfile(data);
  if (!response.errors.length) {
    return;
  }

  const meResponse = await me();
  if (!meResponse.data) {
    return;
  }
  dispatch(setUser(meResponse.data));
};

export const logout = () => async (dispatch) => {
  const response = await fetchLogout();
  if (response.errors.length) {
    return;
  }
  dispatch(setUser(null));
};
