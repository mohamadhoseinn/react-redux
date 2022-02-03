import { Route, Routes } from "react-router-dom";

import HomePageComponent from "./pages/HomePage/HomePage.component";
import ShopComponent from "./pages/Shop/Shop.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageComponent />} />
      <Route path="/shop" element={<ShopComponent />} />
    </Routes>
  );
}

export default App;
