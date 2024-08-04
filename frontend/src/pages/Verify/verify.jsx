import React, { useContext, useEffect} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
import "./verify.css";
import Navbar from "../../components/Navbar";
import axios from "axios";


const Verify = () => {
  const url = useContext(StoreContext)  // Destructure from StoreContext
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
 

    const navigate = useNavigate();

 

  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/"); // Navigate to home on error
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [verifyPayment]); // Add verifyPayment to dependency array

  return (
    <>
     <Navbar/>
      <div className="verify">
        <div className="spinner"></div>
      </div>
     
    </>
  );
};

export default Verify;
