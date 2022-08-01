/* eslint-disable */ 
import React, { useState, useEffect } from "react";
import {ElementsConsumer, PaymentElement} from '@stripe/react-stripe-js';
import { StepContext } from '../stepPage';
import Icon from '@mui/material/Icon';

 const CheckoutForm = (props)=> {
  const {stepValue, setStepValue}=React.useContext(StepContext)
  const onBackToTime=()=>{
    setStepValue(2)
  }

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const {stripe, elements} = props;

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

        <div className="row d-flex flex-row mt-5">
          <div className="col-sm-4">
          <button type="button" className="btn btn-secondary mr-5 pr-5" onClick={onBackToTime}><Icon>keyboard_double_arrow_left</Icon></button>                
          </div>
          <div className="col-sm-4">
          <button type="submit" className="btn btn-success ml-5 pl-3">Submit</button>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
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