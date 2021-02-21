import axios from 'axios';
import {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logoutStart,
  logoutSuccess,
  logoutError,
  getCurrentUserStart,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authAction';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerAuth = credentials => async dispatch => {
  dispatch(registerStart());
  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const loginAuth = credentials => async dispatch => {
  dispatch(loginStart());
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOutAuth = () => async dispatch => {
  dispatch(logoutStart());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserStart());
  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
// const deleteList = id => dispatch => {
//   dispatch(deleteStart());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteSuccess(id)))
//     .catch(error => dispatch(deleteError(error)));
// };
// const fetchList = () => dispatch => {
//   dispatch(fetchStart());
//   axios
//     .get(`/contacts/`)
//     .then(r => dispatch(fetchSuccess(r.data)))
//     .catch(error => dispatch(fetchError(error)));
// };

export { registerAuth, loginAuth, logOutAuth, getCurrentUser };
