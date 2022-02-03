import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePageComponent from "./pages/HomePage/HomePage.component";
import ShopComponent from "./pages/Shop/Shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
