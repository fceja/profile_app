import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './Reducers';

const store = configureStore({
    reducer: appReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;