/* eslint-disable */ 
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%', float:'left' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue=""
          variant="standard"
          placeholder='Please leave your contct information and tell us whats on your mind and one of our team members will reach out to you.'
        />
      </div>
    </Box>
  );
}