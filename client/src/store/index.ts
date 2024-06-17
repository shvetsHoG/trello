import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthSlice from './reducers/AuthSlice.ts';
import LoadingSlice from './reducers/LoadingSlice.ts';

const rootReducer = combineReducers({
    auth: AuthSlice,
    loading: LoadingSlice
});

export const store = configureStore({
    reducer: rootReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
