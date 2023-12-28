import { createSlice } from "@reduxjs/toolkit";

const getCurrentUserDetails = () => {
    return JSON.parse(localStorage.getItem("loggedInUser")) || false
}

const initialState = {
    currentUser: getCurrentUserDetails(),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            localStorage.setItem("loggedInUser", JSON.stringify(action.payload))
            state.currentUser = action.payload;
        },
        userLogout: (state) => {
            localStorage.removeItem("loggedInUser")
            state.currentUser = false;
        }
    }
})

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;