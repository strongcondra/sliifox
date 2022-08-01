/* eslint-disable */ 
import FreeSolo from '../../components/completeInput.js'
import InputText from '../../components/input.js'
import React from 'react'
import { useContext, useState, useEffect } from "react";
import { StepContext } from '../stepPage';
import { UserInformationAdd } from '../../features/UserInformation/UserInformationSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'


function FirstStep() {
    const dispatch = useDispatch()
    const { stepValue, setStepValue } = React.useContext(StepContext);
    const [selectedValue, setSelectedValue] = useState('');
    const [stateValue, setStateValue] = useState(useSelector(state => state.UserInformation[0].stateData));
    const [emailValue, setEmailValue] = useState(useSelector(state => state.UserInformation[0].emailData));
    const [phoneValue, setPhoneValue] = useState(useSelector(state => state.UserInformation[0].phoneData));
    const [nameValue, setNameValue] = useState(useSelector(state => state.UserInformation[0].nameData));
    const [cityValue, setCityValue] = useState(useSelector(state => state.UserInformation[0].cityData));
    const [zipValue, setZipValue] = useState(useSelector(state => state.UserInformation[0].zipData));
    const showSelectedValue = (val) => {
        setSelectedValue(val);
        const myArray = selectedValue.split(",");
        if (myArray.length == 3) {
            setStateValue(myArray[0]);
            setCityValue(myArray[1]);
            setZipValue(myArray[2]);
        }
    }
    const onSaveUserInformation = () => {
        setStepValue(1)
        dispatch(
            UserInformationAdd({
                id: nanoid(),
                stateData: stateValue,
                cityData: cityValue,
                zipData: zipValue,
                emailData: emailValue,
                phoneData: phoneValue,
                nameData: nameValue
            })
        )
        
        window.stepData={stateData:stateValue,cityData:cityValue,zipData:zipValue,emailData:emailValue,phoneData:phoneValue,nameData:nameValue}

    }

    return (
        <div>
            <div className="flex row">

                <h1>Subject Property</h1>
                <p>Please fill in your details, and press "Search". Our system will automatically find the required information.
                    If we are unable to find the information about you, please fill it manually.
                </p>
                <div className='d-flex'>
                    <FreeSolo changed={showSelectedValue} />
                </div>
            </div>
            {(() => {
                if (selectedValue != "") {
                    return (
                        <div className='row flex mt-5'>
                            <h4>{selectedValue}</h4>
                            <a href="#" className='text-dark'>Not exactly your location?</a>
                        </div>
                    )

                } else {
                    return (<></>)
                }
            })()

            }
            {(() => {
                if (stateValue !== "" && cityValue !== "" && zipValue !== "") {
                    return (
                        <>
                            <div className="flex row mt-5">
                                <h2>Personal Data</h2>
                            </div>
                            <div className="flex row">
                                <div className='mx-auto col-sm-4'>
                                    <InputText labelValue='State' contentValue={stateValue} changeValue={setStateValue} />
                                </div>
                                <div className='mx-auto col-sm-4'>
                                    <InputText labelValue='City' contentValue={cityValue} changeValue={setCityValue} />
                                </div>
                                <div className='mx-auto col-sm-4'>
                                    <InputText labelValue="Zip" contentValue={zipValue} changeValue={setZipValue} />
                                </div>
                            </div>
                        </>

                    )

                } else {
                    return (<></>)
                }
            })()}


            <div className="flex row mt-5" >
                <div className='mx-auto col-sm-4'>
                    <InputText labelValue='Your e-mail' contentValue={emailValue} changeValue={setEmailValue} />
                </div>
                <div className='mx-auto col-sm-4'>
                    <InputText labelValue='Your Phone number' contentValue={phoneValue} changeValue={setPhoneValue} />
                </div>
                <div className='mx-auto col-sm-4'>
                    <InputText labelValue="Your name" contentValue={nameValue} changeValue={setNameValue} />
                </div>
            </div>





            <div className='mt-5'>
                <button type="button" className="btn btn-sm btn-danger px-5" onClick={onSaveUserInformation} disabled={!emailValue || !stateValue || !cityValue || !zipValue || !phoneValue || !nameValue} >Next</button>
            </div>
        </div>
    )
}
export default FirstStep