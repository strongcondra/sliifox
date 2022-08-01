import FirstStep from '../pages/step/firstStep.js'
import SecondStep from '../pages/step/secondStep.js'
import ThirdStep from '../pages/step/thirdStep.js'
import FourthStep from '../pages/step/fourthStep.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
function StepRouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Content />} />
                    <Route path="service" element={<Service />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="step" element={<Step />} />                    
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter