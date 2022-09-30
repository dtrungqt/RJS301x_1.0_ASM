import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { popupIsOpen: false, detailProduct: [] };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialState,
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

const store = configureStore({
  reducer: popupSlice.reducer,
});

export default store;
export const popupActions = popupSlice.actions;
