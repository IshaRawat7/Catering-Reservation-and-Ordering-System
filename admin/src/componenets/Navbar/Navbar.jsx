import React, { useContext } from "react";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext"; // Adjust the path as needed
import { FiLogOut } from "react-icons/fi"; // Import the logout icon

const Navbar = ({ setShowLogin }) => {
  const { isLoggedIn, setIsLoggedIn, setToken } = useContext(StoreContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="navbar">
      <img
        className="logo rounded-full"
        src="https://tse4.mm.bing.net/th?id=OIP.in98snHx8ZuMA1ITp-2zgwHaHa&pid=Api&P=0&h=180"
        alt="logo"
      />
      {isLoggedIn ? (
        <div className="profile-container">
          <img
            className="profile-pic"
            src="https://tse2.mm.bing.net/th?id=OIP.YpQ0oZGLK4k09k6sq354OwHaHx&pid=Api&P=0&h=180"
            alt="profile"
          />
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            <FiLogOut size={20} /> Logout
          </button>
        </div>
      ) : (
        <button
          className="sign-in-button"
          onClick={() => setShowLogin(true)}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
