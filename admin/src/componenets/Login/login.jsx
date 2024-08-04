import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext.jsx';

const Login = ({ setShowLogin }) => {
  const { setToken, setIsLoggedIn, apiUrl } = useContext(StoreContext);
  const [currState, setcurrState] = useState("Login");
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let response;
      if (currState === "Register") {
        response = await axios.post(`${apiUrl}/api/admin/register`, data);
      } else {
        response = await axios.post(`${apiUrl}/api/admin/login`, data);
      }
      setToken(response.data.token);
      setIsLoggedIn(true);
      setShowLogin(false);
      console.log("Login successful, token set:", response.data.token);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className='min-w-[25rem] mx-auto flex-col items-center justify-center p-4 h-screen grid fixed z-50 w-full bg-black bg-opacity-[70%]'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center gap-44 flex text-purple-300">
          {currState} | Foodies
          <img src="https://w7.pngwing.com/pngs/175/854/png-transparent-computer-icons-button-check-mark-cross-red-cross-photography-trademark-logo.png" onClick={() => setShowLogin(false)} className='rounded-full flex w-5 h-5' alt="Close" />
        </h1>
        <form onSubmit={onSubmitHandler}>
          {currState !== "Login" && (
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-purple-100'>Full Name</span>
              </label>
              <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter full name' className='w-full input input-bordered h-10' required />
            </div>
          )}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-purple-100'>Email</span>
            </label>
            <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter email' className='w-full input input-bordered h-10' required />
          </div>
          {currState !== "Login" && (
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-purple-100'>Phone</span>
              </label>
              <input type="number" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Enter Phone Number' className='w-full input input-bordered h-10' required />
            </div>
          )}
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-purple-100'>Password</span>
            </label>
            <input type="password" name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' className='w-full input input-bordered h-10' required />
          </div>
          {currState !== "Login" && (
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-purple-100'>Confirm Password</span>
              </label>
              <input type="password" name='confirmPassword' onChange={onChangeHandler} value={data.confirmPassword} placeholder='Confirm password' className='w-full input input-bordered h-10' required />
            </div>
          )}
          <button type='submit' className='btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-600'>
            {currState === "Register" ? "Create account" : "Login"}
          </button>
          <div className='login-pop flex gap-3'>
            <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} required />
            <p className='text-white'>By continuing, I agree to the terms of use and privacy policy</p>
          </div>
          {currState === "Login" ? (
            <p className='flex text-yellow-50 mx-1 gap-6'>
              Create a new account? <span onClick={() => setcurrState("Register")} className="hover:underline hover:text-blue-500 text-orange-400">Click here</span>
            </p>
          ) : (
            <p className='flex text-yellow-50 mx-1 gap-6'>
              Already have an account? <span onClick={() => setcurrState("Login")} className="hover:underline text-orange-400 hover:text-blue-500">Click here</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
