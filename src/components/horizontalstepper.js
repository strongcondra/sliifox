/* eslint-disable */ 
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StepContext } from '../pages/stepPage';
/* eslint-disable */ 

  
  const steps = [
    'Subject Property',
    'Access',
    'Date & Time',
    'Booking',
  ];
  
  export default function HorizontalLinerStepper() {
    const { stepValue, setStepValue } = React.useContext(StepContext);
    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={stepValue} alternativeLabel   orientation='horizontal'>
          {steps.map((label) => (
            <Step key={label} sx={{
              "& .MuiStepIcon-root": { color: "white" ,border:"1px solid orange",borderRadius:'100%'},
              "& .MuiStepIcon-text": { fill: "orange"},
              "& .MuiStepIcon-root.Mui-active": { color: "orange", },
              "& .MuiStepIcon-root.Mui-active .MuiStepIcon-text":{fill:'white'},
              "& .MuiStepIcon-root.Mui-completed": { color: "white" ,border:"1px solid green",borderRadius:'100%'},
              "& .MuiStepIcon-root.Mui-completed ":{fill:'green'},
            }}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }