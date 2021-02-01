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
  console.log(text, number);
  return {
    type: 'addList',
    payload: {
      contact: { id: uuidv4(), name: text, number },
    },
  };
};
export { deleteList, addList };
