/* eslint-disable */ 
import SubComponentsPickers from '../../components/datePicker.js'

import RowRadioButtonsGroup from '../../components/rowRadio.js'
import MaterialTimePickers from '../../components/timePicker.js'
import Icon from '@mui/material/Icon';
import React from 'react'
import { StepContext } from '../stepPage';
import { TimeInformationAdd } from '../../features/TimeInformation/TimeInformationSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import UserService from "../../services/userService.js";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useNavigate } from 'react-router-dom';
import { SignContext } from '../../App.js';

export default function ThirdStep() {
    const navigate = useNavigate();

    const dispatch=useDispatch()
    const { signIn, setSignIn } = React.useContext(SignContext);

    const {stepValue, setStepValue}=React.useContext(StepContext)
    const [changeTimeType,setChangeTimeType]=React.useState(useSelector(state =>state.TimeInformation[0].changeTimeTypeData));
    const [fixedTimeValue,setFixedTimeValue]=React.useState(useSelector(state =>state.TimeInformation[0].fixedTimeData));
    const [fromTimeValue,setFromTimeValue]=React.useState(useSelector(state =>state.TimeInformation[0].fromTimeData));
    const [toTimeValue,setToTimeValue]=React.useState(useSelector(state =>state.TimeInformation[0].toTimeData));
    const onSaveTimeInformation=()=>{
        setStepValue(3)
        dispatch(
            TimeInformationAdd({
                id: nanoid(),
                changeTimeTypeData:changeTimeType,
                fixedTimeData:fixedTimeValue,
                fromTimeData:fromTimeValue,
                toTimeData:toTimeValue,
            })
        )
        window.stepData={...window.stepData, changeTimeTypeData:changeTimeType, fixedTimeData:fixedTimeValue, fromTimeData:fromTimeValue, toTimeData:toTimeValue}

        UserService.orderSave(window.stepData.nameData,window.stepData.phoneData,window.stepData.emailData,window.stepData.switchData,window.stepData.selectedData,window.stepData.comboData,window.stepData.keypadData,window.stepData.fixedTimeData,window.stepData.fromTimeData,window.stepData.toTimeData)

        UserService.addressSave(window.stepData.stateData, window.stepData.zipData, window.stepData.cityData).then(
            (response) =>{
            console.log(response.statusText)
            if (response.statusText==='OK'){
                NotificationManager.success('DB Saved!', 'Click me!',9999 , () => {
                    setSignIn(true)
                    return (
                        navigate('/home')

                    )
                });
            }          
            })
            .catch(function (error) {
            console.log(error);
        });


    }
    const onBackToAccessInformation=()=>{
        setStepValue(1)
        dispatch(
            TimeInformationAdd({
                id: nanoid(),
                changeTimeTypeData:changeTimeType,
                fixedTimeData:fixedTimeValue,
                fromTimeData:fromTimeValue,
                toTimeData:toTimeValue,
            })
          )
          console.log(window.stepData)
    }
    return (
        <div>
            <div className="flex row">
                <h1>When would you like the ispection</h1>
                <p>
                    Please fill in some text that might be helpful for the client and would benefit SEO of the website.
                </p>
            </div>
            <div className="flex row mt-5">
                <h4>Please choose the preferred date</h4>
                <div className="flex row mt-5">
                {/* <MaterialUIPickers /> */}
                <SubComponentsPickers />
                </div>
            </div>
            <div className="flex row mt-5">
                <h4>Please choose the preferred date</h4>
                <RowRadioButtonsGroup  timeLabel={setChangeTimeType}/>
            </div>
            {/* <div className="flex row mt-5">
                <MaterialTimePickers timeChange={changeTimeType}/>
            </div> */}
            <div className="flex row mt-5">
                {(()=>{
                    if(changeTimeType=="a"){
                        return (
                            <div className="flex row">
                                <div className='col-sm-4'>
                                    <p>Choose your time</p>
                                    <MaterialTimePickers timeContent={fixedTimeValue} changeTime={setFixedTimeValue}/>
                                    
                                </div>
                            </div>
                        )
                    }else{
                    return (
                        <div className="flex container row">
                            <div className='col-sm-4' >
                                <p>From time</p>
                                <MaterialTimePickers timeContent={fromTimeValue} changeTime={setFromTimeValue}/>
                                
                            </div>
                            <div className='col-sm-4'>
                                <p>To time</p>
                                <MaterialTimePickers timeContent={toTimeValue} changeTime={setToTimeValue}/>
                                
                            </div>
                            <div className='col-sm-4'>
                                
                                
                        </div>
                        </div>


                    )
                    }
                })()}
            </div>   
            <div className="mt-5">
                <button type="button" className="btn btn-outline-danger"  onClick={onBackToAccessInformation}><Icon>keyboard_double_arrow_left</Icon> </button>                
                <button type="button" className="btn  btn-danger py-2 px-5 mx-2" onClick={onSaveTimeInformation} disabled={!fixedTimeValue && (!fromTimeValue ||!toTimeValue)}>Next</button>

            </div>
            <NotificationContainer />

        </div>
    )
}