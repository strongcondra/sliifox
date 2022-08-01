
import React, { useState, useEffect } from "react";
import {
    Elements,
} from "@stripe/react-stripe-js";
import { PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import UserService from "../services/userService.js";
import InjectedCheckoutForm from "./CheckoutForm.js"

const Faq = () => {

    const stripePromise = loadStripe(
        "pk_test_51LNFdTGc3NL6dx9WrYMQ7BpvsaZvQkiwjdfZhHiJPoVrbxRGWzirzObv7kLdWuKM4e6c6mfSOfBY83zKWAi7H8A400l1uMUJfU"
    );
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
        <>
            {stripeData.length > 0 ? (
                <Elements stripe={stripePromise} options={options}>
                    <InjectedCheckoutForm />
                </Elements>
            ) : (
                <div>loading...</div>
            )
            }
        </>
    );
};

export default Faq;
