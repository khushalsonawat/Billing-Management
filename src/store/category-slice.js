import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categoryList: [],
        totalCategories: 0,
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
        },
        removeCategory(state, action) {
            state.categoryList = state.categoryList.filter((category) => action.payload !== category.id);
            state.totalCategories--;
        },
        updateCategory(state, action) {
            const element = state.categoryList.find((category) => category.id === action.payload.id);
            element.tag = action.payload.tag;
        },
        filterCategory(state, action) {
            state.filterCategoryName = action.payload;
        }
    }
});

export const categoryActions = categorySlice.actions;

export default categorySlice;