import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataFromApi } from "../store/ProductSlice";
import { Link } from "react-router-dom";

function ProductTable() {
  const dataList = useSelector((state) => state.form.dataList);
  const dispatch = useDispatch();
  let Num = 1001;

  const handleDelete = (id) => {
    dispatch(deleteDataFromApi(id));
    alert("Data Delete Success");
  };

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.productName}</td>
                <td>{data.productCategory}</td>
                <td>{data.productFreshness}</td>
                <td>{data.productPrice}</td>
                <td>
                  <Link
                    to={`/edit-product/${data.id}`}
                    className="btn btn-primary m-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
