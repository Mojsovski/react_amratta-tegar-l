import { Route, Routes } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import LandingPage from "../page/LandingPage";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/createproduct" element={<CreateProduct />} />
    </Routes>
  );
}

export default Home;
