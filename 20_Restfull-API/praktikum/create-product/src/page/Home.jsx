import { Route, Routes } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import LandingPage from "../page/LandingPage";
import EditProduct from "./EditProduct";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFromApi } from "../store/ProductSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromApi());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/createproduct" element={<CreateProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default Home;
