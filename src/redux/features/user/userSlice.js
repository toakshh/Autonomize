import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: null,
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: "userDetail",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
        },

    }
})

export const { setUser } = userSlice.actions;
export const selectUserDetails = (state) => state.userDetail.data;
export default userSlice.reducer