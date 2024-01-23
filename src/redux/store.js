import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { fetchUserData } from "./features/api/fetchUserData";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
    reducer: {
        [fetchUserData.reducerPath]: fetchUserData.reducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(fetchUserData.middleware),
});

setupListeners(store.dispatch);