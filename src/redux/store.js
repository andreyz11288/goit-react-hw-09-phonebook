import deleteListReduser from './deleteListReduser';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { contacts: deleteListReduser },
});
export default store;
