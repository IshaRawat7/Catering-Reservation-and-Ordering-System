import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import toast from 'react-hot-toast';


const login = ({ setshowLogin }) => {
  const { url, settoken } = useContext(StoreContext);

  const [currState, setcurrState] = useState("Login");
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      const { success, token, message } = response.data;
      if (success) {
        settoken(token);
        localStorage.setItem("token", token);
        setshowLogin(false);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className='min-w-[25rem] mx-auto flex-col items-center justify-center p-4 h-screen grid fixed z-50 w-full bg-black bg-opacity-[70%]'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center gap-44 flex text-purple-300">
          {currState} | Foodies
          <img src="src/assets/cross.jpg" onClick={() => setshowLogin(false)} className='rounded-full flex w-5 h-5' alt="Close" />
        </h1>
        <form onSubmit={onLogin}>
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
              Already have an account? <span onClick={() => setcurrState("Login")} className="hover:underline text-orange-400 hover:text-blue-500">Login here</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default login;
