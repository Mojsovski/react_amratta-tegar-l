import React, { useState } from "react";

function ProductTable(props) {
  const { dataList } = props;
  let Num = 1001;

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-10">
        <h3>List Product:</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index}>
                <td>{Num++}</td>
                <td>{data.productName}</td>
                <td>{data.productCategory}</td>
                <td>{data.productFreshness}</td>
                <td>{data.productPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
