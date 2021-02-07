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
} from './listAction';

axios.defaults.baseURL = 'http://localhost:4000';

const addList = (text, number) => dispatch => {
  const item = { name: text, number: number };
  dispatch(addStart());
  axios
    .post('/contacts', item)
    .then(r => dispatch(addSuccess(r.data)))
    .catch(error => dispatch(addError(error)));
};

const deleteList = id => dispatch => {
  dispatch(deleteStart());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};
const fetchList = () => dispatch => {
  dispatch(fetchStart());
  axios
    .get(`/contacts/`)
    .then(r => dispatch(fetchSuccess(r.data)))
    .catch(error => dispatch(fetchError(error)));
};

export { addList, deleteList, fetchList };
