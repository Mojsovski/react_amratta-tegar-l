import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataFromApi = createAsyncThunk(
  "form/fetchDataFromApi",
  async () => {
    try {
      const response = await axios.get(
        "https://651e65f044a3a8aa4768443b.mockapi.io/products"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const postDataToApi = createAsyncThunk(
  "form/postDataToApi",
  async (data) => {
    try {
      const response = await axios.post(
        "https://651e65f044a3a8aa4768443b.mockapi.io/products",
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteDataFromApi = createAsyncThunk(
  "form/deleteDataFromApi",
  async (id) => {
    try {
      const response = await axios.delete(
        `https://651e65f044a3a8aa4768443b.mockapi.io/products/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateDataInApi = createAsyncThunk(
  "form/updateDataInApi",
  async ({ id, data }) => {
    try {
      const response = await axios.put(
        `https://651e65f044a3a8aa4768443b.mockapi.io/products/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "form/fetchProductById",
  async (id) => {
    try {
      const response = await axios.get(
        `https://651e65f044a3a8aa4768443b.mockapi.io/products/${id}`
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
  status: "idle",
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
      console.log("submit form called");
      const checkValid = {};
      if (
        !state.formData.productName ||
        !state.formData.productName.match(/^[\w\s]+$/)
      ) {
        checkValid.productName = "Product name is not valid";
      }
      if (
        !state.formData.productCategory ||
        state.formData.productCategory === ""
      ) {
        checkValid.productCategory = "Please select a category";
      }
      if (
        !state.formData.productPrice ||
        !state.formData.productPrice.match(/^\d+(\.\d{1,2})?$/)
      ) {
        checkValid.productPrice = "Price is not valid";
      }
      if (!state.formData.productFreshness) {
        checkValid.productFreshness = "Please select a product freshness";
      }
      if (!state.formData.file) {
        checkValid.file = "Please upload a file";
      }
      if (!state.formData.productDesc) {
        checkValid.productDesc = "Please provide a product description";
      }

      console.log(Object.keys(checkValid).length);
      console.log("checkValid Store", checkValid);
      console.log("errors Store", state.errors);

      if (Object.keys(checkValid).length > 0) {
        console.log("checkValid Store errors", checkValid);
        console.log("state errors", state.dataList);

        state.errors = checkValid;
        console.log(state.errors);
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
      // get API
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

    // post API
    builder
      .addCase(postDataToApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postDataToApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataList.push(action.payload);
      })
      .addCase(postDataToApi.rejected, (state) => {
        state.status = "failed";
      });

    // delete data API
    builder
      .addCase(deleteDataFromApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDataFromApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        const idToDelete = action.meta.arg;
        state.dataList = state.dataList.filter(
          (item) => item.id !== idToDelete
        );
      })
      .addCase(deleteDataFromApi.rejected, (state) => {
        state.status = "failed";
      });

    // Update API
    builder
      .addCase(updateDataInApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDataInApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedData = action.payload;
        state.dataList = state.dataList.map((item) =>
          item.id === updatedData.id ? updatedData : item
        );
      })
      .addCase(updateDataInApi.rejected, (state) => {
        state.status = "failed";
      });

    builder
      // Tambahkan case untuk fetchProductById
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        const productData = action.payload;
        state.formData = productData;
      });
  },
});

export const { updateFormData, submitForm, setErrors } = ProductSlice.actions;
export default ProductSlice.reducer;
