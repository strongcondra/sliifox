/* eslint-disable */ 
import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useSelector, useDispatch } from 'react-redux'

export default function ControlledSwitches(props) {

  const [checked, setChecked] = React.useState(false);
  const checkValue=props.viewSwitch
  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.arrayMethod(event.target.checked)
    console.log(event.target.checked)
  };

  return (
    <Switch
      checked={checkValue}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}