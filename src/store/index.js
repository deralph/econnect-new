import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import businessSlice from "./business.slice";
import sidenav from "./sidenav.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nav: sidenav.reducer,
    business: businessSlice.reducer,
  },
});

export default store;
