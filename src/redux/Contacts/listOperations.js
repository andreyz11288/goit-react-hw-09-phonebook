import axios from 'axios';
import {
  addStart,
  addSuccess,
  addError,
  deleteStart,
  deleteSuccess,
  deleteError,
  fetchStart,
  fetchSuccess,
  fetchError,
  upStart,
  upSuccess,
  upError,
} from './listAction';

// axios.defaults.baseURL = 'http://localhost:4000';

const addList = (text, number) => dispatch => {
  const item = { name: text, number: number };
  dispatch(addStart());
  axios
    .post('/contacts', item)
    .then(r => dispatch(addSuccess(r.data)))
    .catch(error => dispatch(addError(error.message)));
};

const deleteList = id => dispatch => {
  dispatch(deleteStart());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error.message)));
};
const fetchList = () => dispatch => {
  dispatch(fetchStart());
  axios
    .get(`/contacts`)
    .then(r => dispatch(fetchSuccess(r.data)))
    .catch(error => dispatch(fetchError(error.message)));
};

const upList = (id, text, number) => dispatch => {
  const item = { name: text, number: number };
  dispatch(upStart());
  axios
    .patch(`/contacts/${id}`, item)
    .then(r => dispatch(upSuccess(r.data)))
    .catch(error => dispatch(upError(error.message)));
};

export { addList, deleteList, fetchList, upList };
