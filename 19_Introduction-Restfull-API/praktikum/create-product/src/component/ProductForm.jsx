import ProductTable from "./ProductTable";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, submitForm } from "../store/ProductSlice";

function ProductForm() {
  const formData = useSelector((state) => state.form.formData);
  const dataList = useSelector((state) => state.form.dataList);
  const errors = useSelector((state) => state.form.errors);
  const dispatch = useDispatch();

  const setInitialData = () => {
    dispatch(updateFormData({ field: "id", value: "" }));
    dispatch(updateFormData({ field: "productName", value: "" }));
    dispatch(updateFormData({ field: "productCategory", value: "" }));
    dispatch(updateFormData({ field: "productFreshness", value: "" }));
    dispatch(updateFormData({ field: "productDesc", value: "" }));
    dispatch(updateFormData({ field: "productPrice", value: "" }));
  };

  useEffect(() => {
    setInitialData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      dispatch(updateFormData({ field: name, value: file }));
    } else {
      dispatch(updateFormData({ field: name, value }));
    }
  };

  const handleAddProduct = () => {
    dispatch(submitForm());
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="productName">Product name:</label>
              <input
                type="text"
                className={`form-control ${
                  errors.productName ? "is-invalid" : ""
                }`}
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
              {errors.productName && (
                <div className="invalid-feedback">{errors.productName}</div>
              )}
            </div>
            <br />
            {/* product category */}
            <div className="form-group">
              <label htmlFor="productCategory">Product Category:</label>
              <select
                className={`form-control ${
                  errors.productCategory ? "is-invalid" : ""
                }`}
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
              >
                <option value="">select product category </option>
                <option value="Product 1">Product 1</option>
                <option value="Product 2">Product 2</option>
                <option value="Product 3">Product 3</option>
              </select>
              {errors.productCategory && (
                <div className="invalid-feedback">{errors.productCategory}</div>
              )}
            </div>
            <br />
            {/* upload file */}
            <div className="form-group">
              <label htmlFor="file">Product Image:</label>
              <br />
              <input
                type="file"
                className={`form-control-file ${
                  errors.file ? "is-invalid" : ""
                }`}
                id="file"
                name="file"
                onChange={handleChange}
              />
              {errors.file && (
                <div className="invalid-feedback">{errors.file}</div>
              )}
            </div>
            <br />

            {/* //product freshness */}
            <div className="form-group">
              <label htmlFor="productFreshness">Product Freshness:</label>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    errors.productFreshness ? "is-invalid" : ""
                  }`}
                  type="radio"
                  name="productFreshness"
                  id="productFreshness"
                  value="Brand New"
                  checked={formData.productFressness === "Brand New"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    errors.productFreshness ? "is-invalid" : ""
                  }`}
                  type="radio"
                  name="productFreshness"
                  id="productFreshness"
                  value="Second Hand"
                  checked={formData.productFressness === "Second Hand"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    errors.productFreshness ? "is-invalid" : ""
                  }`}
                  type="radio"
                  name="productFreshness"
                  id="productFreshness"
                  value="Refufbished"
                  checked={formData.productFressness === "Refufbished"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio">
                  Refufbished
                </label>
              </div>
            </div>
            <div>
              {errors.productFreshness && (
                <div className="invalid-feedback">
                  {errors.productFreshness}
                </div>
              )}
            </div>
            <br />
            {/* //description */}
            <div className="form-group">
              <label htmlFor="description">Additional Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={3}
                defaultValue={""}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="productPrice">Product Price:</label>
              <input
                type="number"
                className={`form-control ${
                  errors.productPrice ? "is-invalid" : ""
                }`}
                id="productPrice"
                name="productPrice"
                placeholder="$100"
                value={formData.productPrice}
                onChange={handleChange}
              />
              {errors.productPrice && (
                <div className="invalid-feedback">{errors.productPrice}</div>
              )}
            </div>
            <br />
            <div className="text-center">
              <button
                onClick={handleAddProduct}
                className="btn btn-primary"
                style={{ width: 550 }}
              >
                Submit
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
      <ProductTable dataList={dataList} />
    </div>
  );
}

export default ProductForm;
