import { Route, Routes } from "react-router-dom";
import ProjectTwo from "./pages/ProjectTwo";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProjectTwo />} />
      <Route path="/project2" element={<Home />} />
    </Routes>
  );
}

export default App;
