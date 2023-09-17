import styles from "../page/component/CreateProduct.module.css";

export default function CreateProduct() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title> Create Product</title>
      <link rel="stylesheet" href="./asset/styles/custom.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossOrigin="anonymous"
      />
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Simple Header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          className="rounded mx-auto d-block"
          alt="..."
          style={{ width: 62, height: 50 }}
        />{" "}
        <br />
        <div className="row align-items-start">
          <div className="col">
            <h2>Create Product</h2>
            <p>
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p>
          </div>
        </div>
      </div>
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
              {/* button */}
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
      {/* button */}
      <div className="text-center">
        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary my-4"
          style={{ width: 550 }}
        >
          Test Run
        </button>
      </div>
      {/* Table */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-10">
          <h3>List Product:</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Freshness</th>
                <th>Description</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody id="productTableBody"></tbody>
          </table>
        </div>
      </div>
      <br />
    </>
  );
}
