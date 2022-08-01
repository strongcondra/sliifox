/* eslint-disable */ 
import React, { useState } from "react";
import validator from 'validator'
  
const EmailValidation = (props) => {
  
  const [errorMessage, setErrorMessage] = useState('')
  const [emailValue, setEmailValue]=useState('')
  const emailView=props.viewEmail 
  const handleChange=(e) => {
    if (validator.isEmail(e.target.value)) {
      setErrorMessage('')

    } else {
      setErrorMessage('Please check if the e-mail is filled correctly')
    }
    setEmailValue(e.target.value)
    props.changeEmail(e.target.value)
  }
  return (
    <div>
        <div className="fs-4">Email </div>
        <input type="text" value={emailView}
        onChange={handleChange} style={{
          padding:"10px",
          width: '300px',
          borderRadius:'6px'
        }}></input> 
        <span style={{
          fontWeight: 'bold',
          color: 'red',
          paddingLeft:"10px"
        }}>{errorMessage}</span>

    </div>
  );
}
  
export default EmailValidation