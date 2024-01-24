import { configureStore } from "@reduxjs/toolkit";
import { fetchUserData } from "./features/api/fetchUserData";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import userReducer from "./features/user/userSlice";
import userInputReducer from "./features/userInput/userInputSlice";

export const store = configureStore({
    reducer: {
        [fetchUserData.reducerPath]: fetchUserData.reducer,
        user: userReducer,
        input: userInputReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchUserData.middleware),
});

setupListeners(store.dispatch);