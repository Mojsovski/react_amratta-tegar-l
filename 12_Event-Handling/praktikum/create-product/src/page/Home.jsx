import { Component } from "react";
import CreateProduct from "./CreateProduct";
import Header from "../component/Header";
import ProductTable from "../component/ProductTable";
import ProductForm from "../component/ProductForm";
<ProductTable />;

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CreateProduct />
        <ProductForm />
        <ProductTable />
      </div>
    );
  }
}

export default Home;
