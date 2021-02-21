import { createAction } from '@reduxjs/toolkit';

export const fetchStart = createAction('fetchStart');
export const fetchSuccess = createAction('fetchSuccess');
export const fetchError = createAction('fetchError');

export const addStart = createAction('addStart');
export const addSuccess = createAction('addSuccess');
export const addError = createAction('addError');

export const deleteStart = createAction('deleteStart');
export const deleteSuccess = createAction('deleteSuccess');
export const deleteError = createAction('deleteError');

export const upStart = createAction('upStart');
export const upSuccess = createAction('upSuccess');
export const upError = createAction('upError');

export const filterList = createAction('filterList');
