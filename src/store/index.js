import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./bill-slice";
import categorySlice from "./category-slice";

const store = configureStore({
    reducer: {
        bill: billSlice.reducer,
        category: categorySlice.reducer,
    }
});

export default store;