import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import { DELTELIST, ADDLIST, FILTERLIST } from './type';

const deleteList = createAction('deleteList');
// const deleteList = id => {
//   return {
//     type: DELTELIST,
//     payload: {
//       id: id,
//     },
//   };
// };
const addList = createAction('addList', (text, number) => ({
  payload: {
    contact: { id: uuidv4(), name: text, number },
  },
}));

// const addList = (text, number) => {
//   return {
//     type: ADDLIST,
//     payload: {
//       contact: { id: uuidv4(), name: text, number },
//     },
//   };
// };

const filterList = createAction('filterList');

// const filterList = filter => {
//   return {
//     type: FILTERLIST,
//     payload: {
//       filter,
//     },
//   };
// };
export { deleteList, addList, filterList };
