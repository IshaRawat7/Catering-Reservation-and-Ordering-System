import React, { useState } from "react";
import Sidebar from "./componenets/Sidebar/Sidebar";
import Navbar from "./componenets/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/add";
import List from "./pages/List/list";
import Orders from "./pages/Orders/orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./componenets/Login/login.jsx";

const App = () => {
  const url = "https://cateringapp-api.onrender.com";
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div>
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />
        <hr />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add url={url} />} />
            <Route
              path="/login"
              element={<Login setShowLogin={setShowLogin} />}
            />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
