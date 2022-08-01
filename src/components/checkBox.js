import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function CheckboxLabels(props) {
  const checkState=props.viewCheck
  const handleChange=(e)=>{
    console.log(checkState)
    console.log(props.viewCheck)
    props.changeCheck(e.target.checked)
  }
  return (

    <FormGroup>
      <FormControlLabel control={<Checkbox  onChange={handleChange} checked={checkState}/>} label="A non-refundable deposit of 50$ will be applied to this order" />
    </FormGroup>
  );
}