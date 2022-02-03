import HomePageComponent from "./pages/HomePage/HomePage.component";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageComponent />} />
    </Routes>
  );
}

export default App;
