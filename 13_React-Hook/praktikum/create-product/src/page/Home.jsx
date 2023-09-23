import React, { useEffect } from "react";
import CreateProduct from "./CreateProduct";
import Header from "../component/Header";
import ProductForm from "../component/ProductForm";

function Home() {
  useEffect(() => {
    alert("Welcome to Create Product Page");
  }, []);

  return (
    <div>
      <Header />
      <CreateProduct />
      <ProductForm />
    </div>
  );
}

export default Home;
