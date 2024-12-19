import React, { useEffect, useState } from "react";
// import Razorpay from "razorpay";
import axios from "axios";
import settings from "../../resources/settings.json";

const loadRazorpayScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};


const CheckoutButton = ({paymentAmount,order_no}) => {
  // const [razorpayLoaded, setRazorpayLoaded] = useState(false);


  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.onload = () => setRazorpayLoaded(true);
  //   script.onerror = () => alert("Failed to load Razorpay SDK");
  //   document.body.appendChild(script);
  // }, []);
  const handlePayment = async () => {
    // Load Razorpay SDK
    const isRazorpayLoaded = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

      // Step 1: Verify Razorpay script is loaded
    if (!isRazorpayLoaded) {
      alert("Razorpay SDK not loaded. Please try again later.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to initialize.");
      return;
    }

    try {

    const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
    const username = localStorage.getItem('username');

    const jsondata = {
        amount: paymentAmount,
        order_receipt: order_no,
        username: username,
        };

    // Step 2: Call Django API to create an order

    const response = await axios.post("http://127.0.0.1:8000/payment/pay/",
        jsondata,
        {
            headers: {
                Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                'Content-Type': 'application/json',
            },
        withCredentials: true,
        } )
    // const response = await fetch("/create-order/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ amount: 500 }), // Amount in INR
    // });
    console.log('RESPONSE FROM RAZORPAY',response)
    const data = await response;

    // Step 3: Open Razorpay Checkout
    const options = {
      key: settings.RAZORPAY_KEY_ID, // Replace with Razorpay key ID
      amount: data.amount,
      currency: data.currency,
      name: "Mrig Analytics",
      description: "Test Transaction",
      order_id: data.id, // Order ID from backend
      handler: function (response) {
        alert("Payment Successful");
        console.log(response);
        // Optionally send response.razorpay_payment_id to your backend
      },
      prefill: {
        name: username,
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <button onClick={handlePayment} style={{ padding: "10px 20px", background: "#3399cc", color: "#fff", border: "none", cursor: "pointer" }}>
      Pay ₹{paymentAmount}
    </button>
  );
};

export default CheckoutButton;
