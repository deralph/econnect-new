import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import sidenav from "./sidenav.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nav: sidenav.reducer,
  },
});

export default store;
