import { createSlice } from '@reduxjs/toolkit';

interface IPayload {
    payload: boolean;
}

const initialState = {
    isAuth: false
};

const AuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        setAuth: (state, { payload }: IPayload) => {
            state.isAuth = payload;
        }
    }
});

export default AuthSlice.reducer;
export const { setAuth } = AuthSlice.actions;
