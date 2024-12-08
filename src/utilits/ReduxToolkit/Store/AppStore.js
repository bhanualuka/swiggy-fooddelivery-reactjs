import { configureStore } from "@reduxjs/toolkit";
import cartfunction from "../Slices/CartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartfunction,
  },
});

console.log(appStore);

// export default appStore;
