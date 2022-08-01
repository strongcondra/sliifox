/* eslint-disable */ 
import EmailValidation from "../../components/emailValidator.js"
import InputText from '../../components/input.js'
import CountrySelect from "../../components/countrySelect.js"
import CheckboxLabels from "../../components/checkBox.js"
import Icon from '@mui/material/Icon';
import { useContext, useState, useEffect } from "react";
import { StepContext } from '../stepPage';
import React from 'react'
import { BookingInformationAdd } from '../../features/BookingInformation/BookingInformationSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import {
    Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UserService from "../../services/userService.js";
// import PaymentScreen from "./PaymentScreen.js"
import InjectedCheckoutForm from "./CheckoutForm.js"

export default function FourthStep() {
    
    const stripePromise = loadStripe(
        "pk_test_51LNFdTGc3NL6dx9WrYMQ7BpvsaZvQkiwjdfZhHiJPoVrbxRGWzirzObv7kLdWuKM4e6c6mfSOfBY83zKWAi7H8A400l1uMUJfU"
    );
    const [stripeData, setStripeData] = useState('');
    const dispatch = useDispatch()
    const { stepValue, setStepValue } = React.useContext(StepContext)
    const [emailValue, setEmailValue] = useState(useSelector(state => state.BookingInformation[0].emailData));

    // const onBackToTime = () => {
    //     setStepValue(2)
    //     dispatch(
    //         BookingInformationAdd({
    //             id: nanoid(),
    //             emailData: emailValue,
    //         })
    //     )
    // }
    // const onSaveStep = () => {
    //     setStepValue(4)
    //     dispatch(
    //         BookingInformationAdd({
    //             id: nanoid(),
    //             emailData: emailValue,
    //         })
    //     )
    // }

    const getClientSecret = () => {
        UserService.payMoney()
    }
    useEffect(() => {
        async function fetchClientKey() {
            try {
                const response = await UserService.payMoney();
                setStripeData(response.data.client_secret);
                console.log(response.data.client_secret)
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
            <div className="flex row">
                <h1>Please proceed with the payment</h1>
                <p>
                    Please fill in some text that might be helpful for the client and would benefit SEO of the website.
                </p>
            </div>
            {/* <div className="flex row">
                <div className="col-sm-12">
                    <EmailValidation viewEmail={emailValue} changeEmail={setEmailValue} />
                </div>
            </div> */}
            <div className=" row mt-4">
                <div className="col-sm-8 ">
                    <div className="row d-flex flex-row mt-3">
                        {stripeData.length > 0 ? (
                            <Elements stripe={stripePromise} options={options}>
                                <InjectedCheckoutForm />
                            </Elements>
                        ) : (
                            <div>loading...</div>
                        )
                        }
                    </div>

                    {/* <div className="mt-5">
                        <button type="button" className="btn btn-outline-danger" onClick={onBackToTime}><Icon>keyboard_double_arrow_left</Icon> </button>
                        <button type="button" className="btn  btn-danger py-2 px-5 mx-2" onClick={onSaveStep} disabled={!emailValue}>Next</button>

                    </div> */}

                </div>

            </div>
        </div>
    )
}