import { combineReducers } from 'redux';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
export default combineReducers({
  items,
  //   filter,
});
