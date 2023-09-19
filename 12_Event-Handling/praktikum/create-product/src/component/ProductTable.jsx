import { Component } from "react";

class ProductTable extends Component {
  render() {
    return (
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
    );
  }
}

export default ProductTable;
