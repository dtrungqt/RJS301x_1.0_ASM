import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialPopupState = {
  popupIsOpen: false,
  detailProduct: [],
};
const initialProductItemState = { product: [] };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    showPopup(state, action) {
      state.popupIsOpen = true;
      state.detailProduct = action.payload;
    },
    hidePopup(state) {
      state.popupIsOpen = false;
    },
  },
});

const productItemSlice = createSlice({
  name: "productItem",
  initialState: initialProductItemState,
  reducers: {
    selectProductItem(state, action) {
      state.product = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { popup: popupSlice.reducer, productItem: productItemSlice.reducer },
});

export default store;
export const popupActions = popupSlice.actions;
export const selectProductItemActions = productItemSlice.actions;
