import { createSlice } from '@reduxjs/toolkit';
import { ITaskResponse } from '../../types/task.types.ts';

interface IPayload {
    payload: ITaskResponse[] | undefined;
}

interface IInitialState {
    tasks: ITaskResponse[] | undefined;
}

const initialState: IInitialState = {
    tasks: []
};

const TasksSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setTasks: (state, { payload }: IPayload) => {
            state.tasks = payload;
        }
    }
});

export default TasksSlice.reducer;
export const { setTasks } = TasksSlice.actions;
