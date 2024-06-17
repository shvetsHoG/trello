import { createSlice } from '@reduxjs/toolkit';

interface IPayload {
    payload: boolean;
}

const initialState = {
    isLoading: false
};

const LoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        setLoading: (state, { payload }: IPayload) => {
            state.isLoading = payload;
        }
    }
});

export default LoadingSlice.reducer;
export const { setLoading } = LoadingSlice.actions;
