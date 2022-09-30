import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { popupIsOpen: false };

const popupSlice = createSlice({
  name: "popup",
  initialState: initialState,
  reducers: {
    showPopup(state) {
      state.popupIsOpen = true;
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
