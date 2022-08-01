/* eslint-disable */
import VerticalLinearStepper from '../components/verticalstepper.js'
import HorizontalLinearStepper from '../components/horizontalstepper.js'
import FirstStep from './step/firstStep.js'
import SecondStep from './step/secondStep.js'
import ThirdStep from './step/thirdStep.js'
import FourthStep from './step/fourthStep.js'
import React from 'react'
import { useState, createContext, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import dotenv from 'dotenv';
import { SignContext } from '../App.js';
import SignIn from './auth/login.js'
import SignUp from './auth/register.js'
export const StepContext = createContext();
dotenv.config();

function Step() {
    const { signIn, setSignIn } = React.useContext(SignContext);
    const { isLogin, setIsLogin } = React.useContext(SignContext);

    const captchaRef = useRef(null)
    const [reCaptcha, setReCaptcha] = useState(false);
    const [stepValue, setStepValue] = useState(0);
    const value = { stepValue, setStepValue };
    const siteKey = "6LfmOvAgAAAAACOs_9oUJx47wX25EmjjK6j91D4U"
    const handleReCaptcha = () => {
        setReCaptcha(true);
    }
    return (
        <div>
            {!signIn && (
                <div>
                    {!isLogin && (
                        <SignIn changePage={setIsLogin} auth={setSignIn} />
                    )}
                    {isLogin && (
                        <SignUp changePage={setIsLogin} />
                    )}
                </div>
            )}
            {signIn && (
                <div>
                    {!reCaptcha && (
                        <div className=' d-flex justify-content-center'>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY}
                                onChange={handleReCaptcha}
                                ref={captchaRef}
                            />
                        </div>
                    )}
                    {reCaptcha && (
                        <StepContext.Provider value={value}>
                            <div className="container">
                                <div className="flex mx-auto row">
                                    <div className="mx-auto col-sm-4 d-none d-sm-block">
                                        <VerticalLinearStepper />
                                    </div>
                                    <div className="mx-auto col-sm-4 d-block d-sm-none">
                                        <HorizontalLinearStepper />
                                    </div>
                                    <div className="col-sm-8">
                                        {(() => {
                                            switch (stepValue) {
                                                case 0:
                                                    return <FirstStep />;
                                                case 1:
                                                    return <SecondStep />;
                                                case 2:
                                                    return <ThirdStep />;
                                                case 3:
                                                    return <FourthStep />;
                                            }
                                        })()}

                                    </div>
                                </div>
                            </div>
                        </StepContext.Provider>
                    )}
                </div>
            )
            }

        </div>

    )
}
export default Step