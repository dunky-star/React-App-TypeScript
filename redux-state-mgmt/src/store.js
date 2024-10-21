import { configureStore } from "@reduxjs/toolkit";
import cartReduccer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartReduccer,
  },
});
