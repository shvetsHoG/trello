import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthSlice from './reducers/AuthSlice.ts';
import LoadingSlice from './reducers/LoadingSlice.ts';
import ViewSlice from './reducers/ViewSlice.ts';
import TasksSlice from './reducers/TasksSlice.ts';

const rootReducer = combineReducers({
    auth: AuthSlice,
    loading: LoadingSlice,
    view: ViewSlice,
    tasks: TasksSlice
});

export const store = configureStore({
    reducer: rootReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
