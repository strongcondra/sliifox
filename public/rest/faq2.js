
import React, { useState , useEffect} from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UserService from "../services/userService.js";

const axios = require('axios');

const App = () => {
  const stripe = loadStripe(
    "pk_test_51LNFdTGc3NL6dx9WrYMQ7BpvsaZvQkiwjdfZhHiJPoVrbxRGWzirzObv7kLdWuKM4e6c6mfSOfBY83zKWAi7H8A400l1uMUJfU"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};
function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [stripeData, setStripeData] = useState('');

  const getClientSecret = async () => {


    UserService.payMoney().then(
        (response) =>{
        console.log(response.data.client_secret)
        return response.data.client_secret
        })
        .catch(function (error) {
        console.log(error);
    });

      
  }



  
    useEffect(() => {
        getClientSecret().then(data => setStripeData(data))
    }, [])
  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    try {
        const clientSecret = await UserService.payMoney();
        console.log(`cliet_key=${clientSecret}`);
        const paymentResult = await stripe.confirmCardPayment(clientSecret.data.client_secret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: "Faruq Yusuff",
              },
            },
          });
          setPaymentLoading(false);
          if (paymentResult.error) {
            alert(paymentResult.error.message);
          } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
              alert("Success!");
            }
          }
    } catch (error) {
        console.log(`cliet_key=${error}`);
        
    }
  };

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit = {payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />
            <button
              className="pay-button"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? "Loading..." : "Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
