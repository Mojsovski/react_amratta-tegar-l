import { useState } from "react";
import ProductTable from "./ProductTable";

function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productFressness: "",
    productCategory: "",
    productPrice: "",
  });

  const [dataList, setDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    setDataList([...dataList, formData]);
    setFormData({
      productName: "",
      productFressness: "",
      productCategory: "",
      productPrice: "",
    });
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
                className="form-control"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>
            {/* product category */}
            <div className="form-group">
              <label htmlFor="productCategory">Product Category:</label>
              <select
                className="form-control"
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
              >
                <option value="Product 1">Product 1</option>
                <option value="Product 2">Product 2</option>
                <option value="Product 3">Product 3</option>
              </select>
            </div>
            <br />
            {/* upload file */}
            <div className="form-group">
              <label htmlFor="file">Upload File:</label>
              <br />
              <input
                type="file"
                className="form-control-file"
                id="file"
                name="file"
              />
            </div>
            <br />
            {/* //product freshness */}
            <div className="form-group">
              <label htmlFor="productFreshness">Product Freshness:</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="productFreshness"
                  value="Brand New"
                  checked={formData.productCategory === "Brand New"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="productFreshness"
                  value="Second Hand"
                  checked={formData.productCategory === "Second Hand"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="productFreshness"
                  value="Refufbished"
                  checked={formData.productCategory === "Refufbished"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio">
                  Refufbished
                </label>
              </div>
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
                className="form-control"
                id="productPrice"
                name="productPrice"
                placeholder="$100"
                value={formData.productPrice}
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="text-center">
              <button
                onClick={handleAddProduct}
                className="btn btn-primary"
                style={{ width: 550 }}
              >
                Add Product
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
