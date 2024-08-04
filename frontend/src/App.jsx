import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Cart from "./pages/cart/cart";
import Proceed from "./pages/Proceed/Proceed";
import About from "./pages/About/about";
import Menu from "./components/Menu/menu";
import Verify from "./pages/Verify/verify";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import "./index.css";
import "./App.css";
import Myorders from "./pages/MyOrders/Myorders";

function App() {
  const [showLogin, setshowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setshowLogin={setshowLogin} /> : <></>}
      <Routes>
        <Route path="/" element={<Home setshowLogin={setshowLogin} />} />
        <Route path="/" element={<Navbar setshowLogin={setshowLogin} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Proceed />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<Myorders />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
