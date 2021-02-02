import { combineReducers } from 'redux';

const initialState = {
  contacts: {
    items: JSON.parse(localStorage.getItem('contacts')),
    filter: '',
  },
};

const items = (state = initialState.contacts.items, { type, payload }) => {
  switch (type) {
    case 'deleteList':
      return state.filter(contact => contact.id !== payload.id);
    case 'addList':
      return [...state, payload.contact];

    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, { type, payload }) => {
  switch (type) {
    case 'filterList':
      return payload.filter;

    default:
      return state;
  }
};
export default combineReducers({
  items,
  filter,
});
