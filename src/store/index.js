import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPopupState = {
  popupIsOpen: false,
  detailProduct: [],
};
// const initialProductItemState = { product: [] };
const initialLoginState = { isLogin: false };

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

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    onLogin(state) {
      state.isLogin = true;
    },
    onLogout(state) {
      state.isLogin = false;
    },
  },
});
// const productItemSlice = createSlice({
//   name: "productItem",
//   initialState: initialProductItemState,
//   reducers: {
//     selectProductItem(state, action) {
//       state.product = action.payload;
//     },
//   },
// });
const store = configureStore({
  reducer: { popup: popupSlice.reducer, loginStatus: loginSlice.reducer },
});
// const store = configureStore({
//   reducer: { popup: popupSlice.reducer, productItem: productItemSlice.reducer },
// });

export default store;
export const popupActions = popupSlice.actions;
export const loginStatusActions = loginSlice.actions;
// export const selectProductItemActions = productItemSlice.actions;
