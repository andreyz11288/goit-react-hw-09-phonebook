// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchStart = createAction('fetchStart');
export const fetchSuccess = createAction('fetchSuccess');
export const fetchError = createAction('fetchError');

export const addStart = createAction('addStart');
export const addSuccess = createAction('addSuccess');
export const addError = createAction('addError');

// const addList = createAction('addList', (text, number) => ({
//   payload: {
//     contact: { id: uuidv4(), name: text, number },
//   },
// }));
export const deleteStart = createAction('deleteStart');
export const deleteSuccess = createAction('deleteSuccess');
export const deleteError = createAction('deleteError');

// export const deleteList = createAction('deleteList');

export const filterList = createAction('filterList');

// export {
//   deleteList,
//   // addList,
//   filterList,
//   addStart,
//   addSuccess,
//   addError,
// };
