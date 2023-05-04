import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Navigate replace to="/welcome" />} /> 
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
