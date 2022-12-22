import { createSlice } from "@reduxjs/toolkit";

const sidenav = createSlice({
  name: "sidenav",
  initialState: {
    chat: true,
    main: false,
  },
  reducers: {
    main(state) {
      state.main = true;
    },
    chat(state) {
      state.chat = true;
    },
    main_(state) {
      state.main = false;
      state.chat = false;
    },
  },
});

export const navActions = sidenav.actions;
export default sidenav;
