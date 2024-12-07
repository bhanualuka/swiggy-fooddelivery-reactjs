import { configureStore } from "@reduxjs/toolkit";
import cartfunction from "../Slices/CartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartfunction,
  },
});

console.log(appStore);

export default appStore;
