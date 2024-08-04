import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"; // Corrected import
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order from frontend

const placeOrder = async (req, res) => {
  const frontend_url = `http://localhost:5173`;

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items?.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100 * 2), // Ensure amount is an integer
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 2, // Ensure amount is an integer
      },
      quantity: 1,
    });

    // Log the full line items object
    console.log("Line Items:", line_items);

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};

const verifyOrder = async(req,res)=>{
const {orderId,success} = req.body;
try {
  if(success === "true"){
     await orderModel.findByIdAndUpdate(orderId,{payment:true});
     res.json({success:true,message:"Paid"})
  }
  else{
    await orderModel.findByIdAndDelete(orderId);
    res.json({success:false,message:"Not paid"})
  }
} 
  catch (error) {
    console.error("Error paying order:", error);
    res.status(500).json({ success: false, message: "Error paying order" });
  
}
}

//user orders fro frontend
const userOrders = async(req,res)=>
  {
    try {
      const orders = await orderModel.find({userId:req.body.userId});
      res.json({success:true,data:orders})
    } catch (error) {
      consle.log(error);
      res.json({success:false,message:"Error"});
      
    }

  }

  //listening orders for admin panel
  const listOrders = async (req,res) =>{
  try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
  }
// api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(
      req.body.orderId,{},
      { status: req.body.status }
    );
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


export { placeOrder,verifyOrder,userOrders,listOrders,updateStatus };
