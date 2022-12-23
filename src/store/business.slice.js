import { createSlice } from "@reduxjs/toolkit";

const businessSlice = createSlice({
  name: "business",
  initialState: {
    addBusiness: false,
  },
  reducers: {
    add(state) {
      state.addBusiness = true;
    },
    remove(state) {
      state.addBusiness = false;
    },
  },
});

export const businessAction = businessSlice.actions;

export default businessSlice;
