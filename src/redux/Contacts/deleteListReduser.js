import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  deleteSuccess,
  filterList,
  addSuccess,
  fetchSuccess,
} from './listAction';

const items = createReducer([], {
  [fetchSuccess]: (_, { payload }) => payload,
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
