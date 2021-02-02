import { v4 as uuidv4 } from 'uuid';

const deleteList = id => {
  return {
    type: 'deleteList',
    payload: {
      id: id,
    },
  };
};
const addList = (text, number) => {
  return {
    type: 'addList',
    payload: {
      contact: { id: uuidv4(), name: text, number },
    },
  };
};

const filterList = filter => {
  return {
    type: 'filterList',
    payload: {
      filter,
    },
  };
};
export { deleteList, addList, filterList };
