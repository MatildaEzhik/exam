import {createSlice} from "@reduxjs/toolkit";


export const userReducer = createSlice({
    name: 'user',
    initialState: {
        user:""
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    }
});


export const { setUser, logOut} = userReducer.actions;
export default userReducer.reducer;