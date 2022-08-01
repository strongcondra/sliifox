import Header from '../pages/header.js'
import Content from '../pages/content.js'
import Service from '../pages/service.js'
import Faq from '../pages/faq.js'
import Step from '../pages/stepPage.js'
import Error404 from '../pages/404Page.js'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
function Mainrouter(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Content />} />
                    <Route path="home" element={<Content />} />
                    <Route path="service" element={<Service />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="step" element={<Step />} /> 
                    <Route path="*" element={<Error404 />} />         
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Mainrouter