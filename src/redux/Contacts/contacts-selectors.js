import { createSelector } from '@reduxjs/toolkit';

const getContactsItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilterContact = createSelector(
  [getContactsItems, getFilter],
  (items, filter) => {
    const filterToLowerCase = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase),
    );
  },
);

export { getContactsItems, getFilterContact, getFilter };
