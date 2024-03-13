import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';

const store = configureStore(appReducer);

export default store;
