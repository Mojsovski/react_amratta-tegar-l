import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../store/ProductSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
