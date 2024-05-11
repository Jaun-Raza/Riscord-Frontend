import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'dark',
};

const toggleSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const { toggleTheme } = toggleSlice.actions;

export default toggleSlice.reducer;
