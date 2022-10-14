import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialPopupState = {
  popupIsOpen: false,
  detailProduct: [],
};

const initialLoginState = { isLogin: false };

const initialListCartState = { products: [] };

const initialLiveChatState = { isOpen: false };

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
    onLogin(state, action) {
      state.isLogin = true;
    },
    onLogout(state) {
      state.isLogin = false;
    },
  },
});

const listCartSlice = createSlice({
  name: "listCart",
  initialState: initialListCartState,
  reducers: {
    addCart(state, action) {
      state.products.push(action.payload);
    },
    updateCart(state, action) {
      state.products = action.payload;
    },
    deleteCart(state, action) {
      const itemDeleteID = action.payload;
      let itemDeleteIndex;
      const itemDelete = state.products.find((data, index) => {
        itemDeleteIndex = index;
        return data.id === itemDeleteID;
      });
      state.products.splice(itemDeleteIndex, 1);

      //cập nhật listCart trong localStorage
      const updatedListCart = state.products;
      const transformListCart = JSON.stringify(updatedListCart);
      localStorage.setItem("listCart", transformListCart);
    },
  },
});

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: initialLiveChatState,
  reducers: {
    toggleState(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    loginStatus: loginSlice.reducer,
    listCart: listCartSlice.reducer,
    liveChat: liveChatSlice.reducer,
  },
});

export default store;
export const popupActions = popupSlice.actions;
export const loginStatusActions = loginSlice.actions;
export const addListCartActions = listCartSlice.actions;
export const liveChatActions = liveChatSlice.actions;
