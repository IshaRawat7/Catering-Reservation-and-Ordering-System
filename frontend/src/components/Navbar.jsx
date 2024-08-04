import React from "react";
import { useState } from "react";
import { FaCartArrowDown, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setshowLogin }) => {
  const { token, settoken } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("/");
  };

  return (
    <>
      <nav className="flex fixed top-0 w-full home flex-wrap items-center justify-between p-4 bg-[#fac989]">
        <div className="text-4xl font-bold font-serif text-black">FOODIE</div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <FaBars className="w-8 h-8" />
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-right text-bold mt-5 lg:mt-0 lg:border-none">
            <Link
              to="/"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Home
            </Link>
            <a
              href="#explore"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Menu
            </a>
            <Link
              to="/about"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              About us
            </Link>
            <a
              href="#gallery"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Gallery
            </a>
            <a
              href="#contactUs"
              className="block text-black lg:inline-block text-xl hover:text-blue-500 px-3 py-3 lg:border-none"
            >
              Visit Us
            </a>
          </div>
          <div className="text-blue-700 w-full lg:flex lg:w-auto text-right text-bold mt-5 lg:mt-0 lg:border-none">
            <Link to="/cart">
              <FaCartArrowDown className="w-36 h-10 mr-10  sm:mr-0" />
            </Link>
            {!token ? (
              <button
                className="hover:bg-orange-500 rounded-full w-20 h-10 text-white bg-orange-400 transition ease-in-out"
                onClick={() => setshowLogin(true)}
              >
                Sign In
              </button>
            ) : (
              <div className="profile relative">
                <img
                  className="rounded-full h-12 w-12"
                  src="src/assets/profile.png"
                  alt="profile"
                />
                <ul className="dropdown hidden absolute">
                  <li onClick={() => navigate("/myorders")}>
                    <img
                      src="src/assets/order.png"
                      alt="order"
                      className="h-5 w-5"
                    />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={Logout}>
                    <img
                      src="src/assets/logout.jpg"
                      alt="logout"
                      className="rounded-full h-5 w-5"
                    />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
