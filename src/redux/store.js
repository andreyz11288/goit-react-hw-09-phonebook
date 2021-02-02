import { createStore, combineReducers } from 'redux';
import deleteListReduser from './deleteListReduser';

const reducer = combineReducers({
  contacts: deleteListReduser,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
