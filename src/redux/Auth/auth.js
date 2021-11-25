import { authUser, regUser } from '../../helpers/authUser';

const REGISTER_USER = 'auth/user/REGISTER_USER';
const SIGN_IN_USER = 'auth/user/SIGN_IN_USER';
const SIGN_OUT_USER = 'auth/user/SIGN_OUT_USER';
const GET_ERRORS = 'auth/user/GET_ERRORS';

const initialState = {
  logged_in: false,
  loading: true,
  token: null,
  admin: null,
  username: null,
  id: null,
  errors: null,
};

export const createUser = (data) => async (dispatch) => {
  const res = await regUser(data);
  if (res.token) {
    dispatch({ type: REGISTER_USER, payload: res });
  } else {
    dispatch({ type: GET_ERRORS, payload: res.errors[1] });
  }
};

export const logOutUser = () => {
  localStorage.removeItem('token');

  return { type: SIGN_OUT_USER };
};

export const logInUser = (data) => async (dispatch) => {
  const res = await authUser(data);
  if (res.token) {
    dispatch({ type: SIGN_IN_USER, payload: res });
  } else {
    dispatch({ type: GET_ERRORS, payload: res.errors });
  }
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        logged_in: true,
        loading: false,
        admin: payload.admin,
        username: payload.username,
        id: payload.id,
        token: payload.token,
      };
    case GET_ERRORS:
      return {
        ...state, logged_in: false, loading: false, errors: payload,
      };
    case SIGN_IN_USER:
      return {
        ...state,
        logged_in: true,
        loading: false,
        admin: payload.admin,
        username: payload.username,
        id: payload.id,
        token: payload.token,
        errors: null,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        logged_in: false,
        admin: null,
        username: null,
        id: null,
        token: null,
        errors: null,
      };
    default:
      return state;
  }
};
export default authReducer;
