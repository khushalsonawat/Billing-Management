import { createSlice } from "@reduxjs/toolkit";
import { initialBills, totalBills } from "../utils";

const billSlice = createSlice({
    name: "bill",
    initialState: {
        billList: JSON.parse(localStorage.getItem("bills")) ? JSON.parse(localStorage.getItem("bills")) : initialBills.bills,
        totalBills: totalBills,
        monthlyBudget: 0,
        showMinimumBills: false,
    },
    reducers: {
        addBill(state, action) {
            const newBill = action.payload;
            state.billList.push(newBill);
            ++state.totalBills;
            localStorage.setItem("bills", JSON.stringify(state.billList));
        },
        removeBill(state, action) {
            state.billList = state.billList.filter((bill) => bill.id !== action.payload.id);
            state.totalBills--;
            localStorage.setItem("bills", JSON.stringify(state.billList));
        },
        updateBill(state, action) {
            const element = state.billList.find((bill) => bill.id === action.payload.id);
            element.category = action.payload.category;
            element.amount = action.payload.amount;
            element.description = action.payload.description;
            element.date = action.payload.date;
            localStorage.setItem("bills", JSON.stringify(state.billList));
        },
        updateMonthlyBudget(state, action) {
            state.monthlyBudget = action.payload;
        },
        highlightMinimumBills(state, action) {
            state.showMinimumBills = !state.showMinimumBills;
            if (state.showMinimumBills) {
                let arr = state.billList;
                arr.sort(function (a, b) {
                    return b.amount - a.amount;
                });
                let result = [];
                let curr_sum = 0;
                for (var i = 0; i < arr.length; ++i) {
                    if (curr_sum + arr[i].amount <= state.monthlyBudget) {
                        result.push(arr[i]);
                        curr_sum += arr[i].amount;
                    }
                }
                state.billList = result;
            } else {
                state.billList = JSON.parse(localStorage.getItem("bills"));
            }
        }
    }
})

export const billActions = billSlice.actions;

export default billSlice;