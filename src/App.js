import { Route, Routes } from "react-router-dom";

import HomePageComponent from "./pages/HomePage/HomePage.component";
import ShopComponent from "./pages/Shop/Shop.component";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
      </Routes>
    </div>
  );
}

export default App;
