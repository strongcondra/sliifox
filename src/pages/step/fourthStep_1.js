/* eslint-disable */ 
import React from 'react'
import { useContext, useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, CardCvcElement, useElements } from "@stripe/react-stripe-js";
import UserService from "../../services/userService.js";
const stripePromise = loadStripe(
    "pk_test_51LNFdTGc3NL6dx9WrYMQ7BpvsaZvQkiwjdfZhHiJPoVrbxRGWzirzObv7kLdWuKM4e6c6mfSOfBY83zKWAi7H8A400l1uMUJfU"
);
function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [cvcError, setCvcError] = useState(null);

    const { card, billing_details } = paymentMethod;

    const handleSubmit = async (e) => {
        e.preventDefault();
        stripe
            .createToken("cvc_update", elements.getElement(CardCvcElement))
            .then((result) => {
                if (result.error) {
                    setCvcError(result.error.message);
                } else {

                    UserService.payUser(paymentMethod.id, paymentIntent.id).then(
                        (resp) => {

                            console.log(resp.data);
                            handleServerResponse(resp.data);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
                /* Handle error*/
            });
    };

    function handleServerResponse(response) {
        if (response.error) {
            console.log(response.error);
            /* Handle Error */
        } else if (response.next_action) {
            handleAction(response);
        } else {
            alert("Payment Success");
            /* Handle Success */
            window.location.reload();
        }
    }

    function handleAction(response) {
        stripe.handleCardAction(response.client_secret).then(function (result) {
            if (result.error) {
                console.log(result.error);
                /* Handle error */
            } else {
                UserService.payUser(paymentMethod.id, paymentIntent.id).then(
                    (resp) => {
                        handleServerResponse(resp.data);
                    })
                    .catch((err) => {
                        console.log(err);
                        /* Handle Error */
                    });
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className='d-flex row flex-row'>
            <label>Enter Cvc/Cvv </label>
            <div >
                <CardCvcElement

                    onChange={() => {
                        setCvcError(null);
                    }}
                />
            </div>
            <p>{cvcError}</p>
            <button onClick={handleSubmit}>Buy</button>
        </div>
        </form>
    )
}

/* Elements Wrapper so that we can use useElement in PaymentForm  */
export default function Stripe() {
    const [stripeData, setStripeData] = useState('');
    const getClientSecret = () => {
        UserService.payMoney()
    }
    useEffect(() => {
        async function fetchClientKey() {
            try {
                const response = await UserService.payMoney();
                setStripeData(response.data.client_secret);
                console.log(response)
            } catch (error) {
                console.log(`cliet_key=${error}`);
            }
        }
        fetchClientKey();
    }, []);

    const options = {
        // passing the client secret obtained from the server
        clientSecret: stripeData,
    };
    return (
        <div>
            {stripeData.length > 0 ? (
            <Elements stripe={stripePromise} options={options}>
                <PaymentForm/>
            </Elements>
            ) : (
                <div>loading...</div>
            )
            }
        </div>

    );
}