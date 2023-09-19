import { Component } from "react";




class ProductForm extends Component {
  render() {
    return (
      <div>
        <form id="productForm">
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
                  />
                </div>
                <br />
                {/* product category */}
                <div className="form-group">
                  <label htmlFor="productCategory">Product Category:</label>
                  <select
                    className="form-control"
                    id="productCategory"
                    name="productCategory"
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
                      defaultValue="Brand New"
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
                      defaultValue="Second Hand"
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
                      defaultValue="Refufbished"
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
                {/* //product price */}
                <div className="form-group">
                  <label htmlFor="productPrice">Product Price:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    name="productPrice"
                    placeholder="$100"
                  />
                </div>
                <br />
                <div className="text-center">
                  <button
                    type="submit"
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
        </form>
      </div>
    );
  }
}

export default ProductForm;
