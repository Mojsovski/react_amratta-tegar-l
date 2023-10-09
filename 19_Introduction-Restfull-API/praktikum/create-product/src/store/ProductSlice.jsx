import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk to fetch data from API
export const fetchDataFromApi = createAsyncThunk(
  "form/fetchDataFromApi",
  async () => {
    try {
      // Ganti URL API dengan URL yang sesuai
      const response = await axios.get(
        "https://651e65f044a3a8aa4768443b.mockapi.io/products"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  formData: {
    productName: "",
    productCategory: "",
    productFreshness: "",
    productDesc: "",
    productPrice: "",
    file: null,
    id: "",
  },
  dataList: [],
  errors: {},
  status: "idle", // idle, loading, succeeded, failed
};

const ProductSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    submitForm: (state) => {
      const checkValid = {};
      if (!state.formData.productName.match(/^[\w\s]+$/)) {
        checkValid.productName = "Product name is not valid";
      }
      if (state.formData.productCategory === "") {
        checkValid.productCategory = "Please select a category";
      }
      if (!state.formData.productPrice.match(/^\d+(\.\d{1,2})?$/)) {
        checkValid.productPrice = "Price is not valid";
      }
      if (!state.formData.productFreshness) {
        checkValid.productFreshness = "Please select a product freshness";
      }
      if (!state.formData.file) {
        checkValid.file = "Please upload a file";
      }

      if (Object.keys(checkValid).length > 0) {
        state.errors = checkValid;
        return;
      }

      state.dataList.push(state.formData);
      state.formData = initialState.formData;
      state.errors = {};
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataFromApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataList = action.payload;
      })
      .addCase(fetchDataFromApi.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { updateFormData, submitForm, setErrors } = ProductSlice.actions;
export default ProductSlice.reducer;
