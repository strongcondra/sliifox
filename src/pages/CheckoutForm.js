/* eslint-disable */ 
import {ElementsConsumer, PaymentElement} from '@stripe/react-stripe-js';
import React, { useState, useEffect } from "react";


const CheckoutForm =(props)=> {
    const [stripe, setStripe]=useState(false)    
    const [elements, setElements]=useState('')

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setStripe(props.stripe)
    setElements(props.elements)

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button disabled={!stripe}>Submit</button>
      </form>
    );
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}