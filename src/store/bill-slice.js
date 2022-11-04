import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
    name: "bill",
    initialState: {
        billList: [],
        totalBills: 0,
        showMinimumBills: false,
    },
    reducers: {
        addBill(state, action) {
            const newBill = action.payload;
        },
        removeBill(state, action) {

        },
        updateBill(state, action) {

        },
    }
})

export const billActions = billSlice.actions;

export default billSlice;