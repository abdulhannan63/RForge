import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
    },
});

export default store;