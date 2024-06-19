import { createSlice } from '@reduxjs/toolkit';

interface IPayload {
    payload: boolean;
}

const initialState = {
    isList: true
};

const ViewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        setView: (state, { payload }: IPayload) => {
            state.isList = payload;
        }
    }
});

export default ViewSlice.reducer;
export const { setView } = ViewSlice.actions;
