import { createSlice } from "@reduxjs/toolkit";
// import Img1 from "../assets/rtx1.png";
// import Img2 from "../assets/rtx2.jpg";
// import Img3 from "../assets/rx1.jpg";

const initialState = {
  formData: {
    productName: "",
    productCategory: "",
    productFreshness: "",
    productDesc: "",
    productPrice: "",
    file: null,
  },
  dataList: [
    {
      productName: "ASUS ROG RTX 4080",
      productCategory: "Product 1",
      productFreshness: "Brand New",
      productDesc: "Nvidia",
      productPrice: "17000000",
      file: "",
    },
    {
      productName: "Gigabyte RTX 4060 Low Profile",
      productCategory: "Product 2",
      productFreshness: "Brand New",
      productDesc: "Nvidia",
      productPrice: "5000000",
      file: "",
    },
    {
      productName: "Sapphire RX 7900 XT",
      productCategory: "Product 3",
      productFreshness: "Brand New",
      productDesc: "AMD",
      productPrice: "10000000",
      file: "",
    },
  ],
  errors: {},
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
});

export const { updateFormData, submitForm, setErrors } = ProductSlice.actions;
export default ProductSlice.reducer;
