import { combineReducers } from 'redux';
// import { DELTELIST, ADDLIST, FILTERLIST } from './type';
import { deleteList, addList, filterList } from './listAction';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: JSON.parse(localStorage.getItem('contacts'))
      ? JSON.parse(localStorage.getItem('contacts'))
      : [],
    filter: '',
  },
};

const items = createReducer(initialState.contacts.items, {
  [deleteList]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addList]: (state, { payload }) => [...state, payload.contact],
});

// const items = (state = initialState.contacts.items, { type, payload }) => {
//   switch (type) {
//     case deleteList.type:
//       return state.filter(contact => contact.id !== payload);
//     case addList.type:
//       return [...state, payload.contact];

//     default:
//       return state;
//   }
// };

const filter = createReducer(initialState.contacts.filter, {
  [filterList]: (_, { payload }) => payload,
});

// const filter = (state = initialState.contacts.filter, { type, payload }) => {
//   switch (type) {
//     case filterList.type:
//       return payload;

//     default:
//       return state;
//   }
// };
export default combineReducers({
  items,
  filter,
});
