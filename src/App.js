
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "aos/dist/aos.css";
import Aos from "aos";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Carts from "./pages/carts/Carts";      
import DesktopOne from "./pages/desktop1/DesktopOne";
import DesktopTwo from "./pages/desktop2/DesktopTwo";


function App() {


   Aos.init();
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/desktop-one"
          element={<DesktopOne  />}
        />
        <Route
          path="/desktop-two"
          element={<DesktopTwo  />}
        />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
