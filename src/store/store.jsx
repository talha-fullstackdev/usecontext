import { configureStore } from "@reduxjs/toolkit";
import counterslice from "../slices/counterslice";
import nameslice from "../slices/nameslice";
const store = configureStore({
  reducer: {
    counterslice,
    nameslice,
  },
});
export default store;
