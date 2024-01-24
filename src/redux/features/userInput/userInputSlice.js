import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "",
}

// console.log(initialState.value)
const userInputSlice = createSlice({
    name: "userInput",
    initialState,
    reducers: {
        setUserInput: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setUserInput } = userInputSlice.actions;
export const selectUserInput = (state) => state.userInput.value;
export default userInputSlice.reducer;