import React, { createContext, useState, useEffect } from 'react';
const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [apiUrl] = useState('https://cateringapp-api.onrender.com'); // backend URL

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  }, [token]);

  return (
    <StoreContext.Provider value={{ token, setToken, isLoggedIn, setIsLoggedIn, apiUrl }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };

