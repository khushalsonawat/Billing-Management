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
            state.billList.push(newBill);
            console.log(state.billList);
            ++state.totalBills;
        },
        removeBill(state, action) {
            state.billList = state.billList.filter((bill) => bill.id !== action.payload.id);
            state.totalBills--;
        },
        updateBill(state, action) {
            const element = state.billList.find((bill) => bill.id === action.payload.id);
            element.category = action.payload.category;
            element.amount = action.payload.amount;
        },
    }
})

export const billActions = billSlice.actions;

export default billSlice;