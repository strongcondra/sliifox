/* eslint-disable */ 
import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
export default function MaterialTimePickers(props) {
  const [value, setValue] = React.useState("2015-03-25T12:00:00-06:00");
  const timeValue=new Date(props.timeContent)
  
  const handleChange = (newValue) => {
    console.log(newValue)
    setValue(newValue.toISOString());
    props.changeTime(newValue.toISOString())
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>

      <DesktopTimePicker
          label="Clock"
          value={timeValue}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}