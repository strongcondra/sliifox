/* eslint-disable */ 
import ColRadioButtonsGroup from '../../components/colRadio.js'
import InputText from '../../components/input.js'
import ControlledSwitches from '../../components/switch.js'
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';
import React from 'react'
import { StepContext } from '../stepPage';
import { AccessInformationAdd } from '../../features/AccessInformation/AccessInformationSlice.js'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
function SecondStep() {
    const dispatch=useDispatch()
    const {stepValue, setStepValue}=React.useContext(StepContext)
    const [checkState,setCheckState]=React.useState(useSelector(state =>state. AccessInformation[0].switchData));
    const [selectedValue,setSelectedValue]=React.useState(useSelector(state =>state. AccessInformation[0].selectedData));
    const [comboValue,setComboValue]=React.useState(useSelector(state =>state. AccessInformation[0].comboData));
    const [keypadValue,setKeypadValue]=React.useState(useSelector(state =>state. AccessInformation[0].keypadData));
    const [ButtonState, setButtonState] = React.useState(false);
    
    const onSaveAccessInformation=()=>{
        setStepValue(2)
        dispatch(
            AccessInformationAdd({
              id: nanoid(),
              switchData: checkState,
              selectedData:selectedValue,
              comboData:comboValue,
              keypadData:keypadValue,
            })
        )      
        window.stepData={...window.stepData,switchData:checkState,selectedData:selectedValue,comboData:comboValue,keypadData:keypadValue} 
  
    }

    const onBackToUserInformation=()=>{
        setStepValue(0)
        dispatch(
            AccessInformationAdd({
            id: nanoid(),
            switchData: checkState,
            selectedData:selectedValue,
            comboData:comboValue,
            keypadData:keypadValue,
            })
        )
    }



    return (
        <div>
            <div className="flex row">
                <h1 className="mt-32">How do we gain access</h1>
                <p>
                    Please fill in some text that might be helpful for the client and would benefit SEO of the website.
                </p>
            </div>
            
            <div className="flex row mt-5">
                    <h4>
                    The place will be 
                    </h4>
                    <div className="flex row mt-5">
                        <h5>Occupied<ControlledSwitches viewSwitch={checkState}  arrayMethod={setCheckState}/>Vacant</h5>                        
                    </div>                    
            </div>
            <div className="flex row mt-5">
                <div className="col-sm-4">
                    <h5>Check all that apply:</h5>
                    <ColRadioButtonsGroup radioView={checkState}  selectRadio={selectedValue} selectChange={setSelectedValue}/>
                </div>
                {(()=>{
                    if(checkState){
                        return(
                            <div className="col-sm-8">
                                <h5>Please enter lockboxinfo(if applicable)</h5>
                                <div className="flex row mt-5">
                                    <div className="col-sm-6">
                                    <InputText labelValue='Combo' contentValue={comboValue} changeValue={setComboValue} />
            
                                    </div>
                                    <div className="col-sm-6">
                                    <InputText labelValue='Keypad' contentValue={keypadValue} changeValue={setKeypadValue} />
            
                                    </div>
                                </div>
                            </div>
                        )
                    }else{
                        return(<></>)
                    }
                })()}

            </div>
            <div className="flex row mt-5">
                <h3>Additional information</h3>
                <p>Please tell us everything else we should know</p>
            </div>
            <Divider variant="middle" className="mt-5" />
            <div className="mt-5">

            <button type="button" className="btn btn-outline-danger" onClick={onBackToUserInformation}><Icon>keyboard_double_arrow_left</Icon> </button>                
            <button type="button" className="btn  btn-danger py-2 px-5 mx-2" onClick={onSaveAccessInformation} >Next</button>

            </div>
        </div>
    )
}

export default SecondStep