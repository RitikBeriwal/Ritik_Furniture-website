import { Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <Routes>
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}

export default App;