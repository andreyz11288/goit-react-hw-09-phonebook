import { createStore, combineReducers } from 'redux';
import deleteListReduser from './deleteListReduser';

// Используем редюсер-болванку
const reducer = combineReducers({
  contacts: deleteListReduser,
});

const store = createStore(reducer);

export default store;

//  {contacts: {
//       items: [],
//       filter: '',
//     }}
