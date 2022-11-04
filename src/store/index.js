import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./bill-slice";

const store = configureStore({
    reducer: {
        bill: billSlice.reducer,
    }
});

export default store;