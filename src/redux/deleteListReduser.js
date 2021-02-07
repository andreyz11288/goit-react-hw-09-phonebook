import { combineReducers } from 'redux';
// import { DELTELIST, ADDLIST, FILTERLIST } from './type';
import { fetchList } from './listOperations';
import { createReducer } from '@reduxjs/toolkit';
import { deleteSuccess, filterList, addSuccess } from './listAction';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

const items = createReducer([], {
  [fetchList]: (_, { payload }) => payload,
  [addSuccess]: (state, { payload }) => [...state, payload],
  [deleteSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterList]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
