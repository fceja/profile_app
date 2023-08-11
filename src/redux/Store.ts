import { appReducer } from './Reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: appReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default store;