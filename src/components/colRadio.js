/* eslint-disable */ 
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector, useDispatch } from 'react-redux'

export default function ColRadioButtonsGroup(props) {
  const [radioValue, setRadioValue] = React.useState('');
  const radioState=props.radioView
  const selectedRadio= props.selectRadio
  const handleChange = (event) => {
    console.log(event.target.value)
    setRadioValue(event.target.value)
    props.selectChange(event.target.value)
  }
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="a" control={<Radio
          checked={selectedRadio === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />} label="Property owver will be there" 
        />
        <FormControlLabel value="b" control={<Radio
          checked={selectedRadio === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />} label="Home buyer will be there"  
        />
        <FormControlLabel value="c" control={<Radio
          checked={selectedRadio === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />} label="Real estate will be there" 
        />
        {(()=>{
          if(radioState){
            return (
              <FormControlLabel value="d" control={<Radio
                checked={selectedRadio === 'd'}
                onChange={handleChange}
                value="d"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'A' }}
              />} label="Vacant-noone will be there" 
              />
            )

          }else{
            return(<></>)
          }
        })()}


      </RadioGroup>
    </FormControl>
  );
}

