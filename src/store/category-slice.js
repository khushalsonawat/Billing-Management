import { createSlice } from "@reduxjs/toolkit";
import { initialCategories, totalCategories } from "../utils";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: JSON.parse(localStorage.getItem("categories")) ? JSON.parse(localStorage.getItem("categories")) : initialCategories.categories,
        totalCategories: totalCategories,
        filterCategoryName: "",
    },
    reducers: {
        addCategory(state, action) {
            const category = {
                id: state.totalCategories + 1,
                tag: action.payload.tag
            };
            state.categoryList.push(category);
            state.totalCategories++;
            localStorage.setItem("categories", JSON.stringify(state.categoryList));
        },
        removeCategory(state, action) {
            state.categoryList = state.categoryList.filter((category) => action.payload !== category.id);
            state.totalCategories--;
            localStorage.setItem("categories", JSON.stringify(state.categoryList));
        },
        updateCategory(state, action) {
            const element = state.categoryList.find((category) => category.id === action.payload.id);
            element.tag = action.payload.tag;
            localStorage.setItem("categories", JSON.stringify(state.categoryList));
        },
        filterCategory(state, action) {
            state.filterCategoryName = action.payload;
        }
    }
});

export const categoryActions = categorySlice.actions;

export default categorySlice;