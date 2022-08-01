/* eslint-disable */ 
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputText(props) {
  const [name, setName] = React.useState('');
  const contentValue=props.contentValue
  const handleChange = (event) => {
    setName(event.target.value);
    props.changeValue(event.target.value)

  };
  const labelValue = props.labelValue;

  return (
    <Box
    sx={{
      width: 800,
      maxWidth: '100%',
    }}
      component="form"
      noValidate
      autoComplete="off"
      
    >
        
      <TextField
        id="outlined-name"
        label={labelValue}
        value={contentValue}
        onChange={handleChange}
        className="w-100"/>
    </Box>
  );
}