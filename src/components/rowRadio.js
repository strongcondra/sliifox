/* eslint-disable */ 
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector, useDispatch } from 'react-redux'
export default function RowRadioButtonsGroup(props) {
  const [selectedValue, setSelectedValue] = React.useState(useSelector(state =>state.TimeInformation[0].changeTimeTypeData));
  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectedValue(event.target.value);
    props.timeLabel(event.target.value)
  }
  return (
    
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="fixed" control={<Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />} label="Fixed time" className='px-5' 
        />
        
        <FormControlLabel value="ranged" control={<Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />} label="Ranged" className='px-5'/>

        <FormControlLabel value="any" control={<Radio
          checked={selectedValue === 'c'}
          onChange={handleChange}
          value="c"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />} label="Anytime" className='px-5'/>
      </RadioGroup>
    </FormControl>
  );
}

