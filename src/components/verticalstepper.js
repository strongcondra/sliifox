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
import { StepConnector } from '@mui/material';
/* eslint-disable */ 

  
const steps = [
  {
    label: 'Subject Property',
    description: `Fill your street number`,
  },
  {
    label: 'Access',
    description:
      'How would we get a key',
  },
  {
    label: 'Date & Time',
    description: `Anytime you like`,
  },
  {
    label: 'Booking',
    description:
      'Complete the form',
  },
];
  
  export default function VerticalLinerStepper() {
    const { stepValue, setStepValue } = React.useContext(StepContext);
    return (
      <div className='row'>
        <div className='col-sm-8'>
            <Box sx={{width: '100%' , position:'relative',}}>
            <Stepper activeStep={stepValue}   orientation='vertical' sx={{"& .MuiStepContent-root":{borderRight:'none',borderLeftStyle:"none"},
              "& .MuiStepConnector-root":{borderRight:'1px solid #bdbdbd'},
              "& .MuiStep-vertical":{borderRight:'1px solid #bdbdbd'},
              "& .MuiStepConnector-line":{backgroundImage:'url("circle.jpg")',backgroundSize:'8px 8px', backgroundRepeat:'no-repeat', backgroundPosition:'right center', marginRight:'-4px', borderLeftStyle:'none'}}}>
              {steps.map((steps, index) => (
                <Step key={steps.label}         sx={{
                  "& .MuiStepIcon-root": { color: "white" ,border:"1px solid orange",borderRadius:'100%',position:'absolute',right:'-12px',marginTop:"-12px"},
                  "& .MuiStepIcon-text": { fill: "orange",position:'absolute',right:'-12px'},
                  "& .MuiStepIcon-root.Mui-active": { color: "orange", position:'absolute',right:'-12px'},
                  "& .MuiStepIcon-root.Mui-active .MuiStepIcon-text":{fill:'white',position:'absolute',right:'-12px'},
                  "& .MuiStepIcon-root.Mui-completed": { color: "white" ,border:"1px solid green",borderRadius:'100%',position:'absolute',right:'-12px'},
                  "& .MuiStepIcon-root.Mui-completed ":{fill:'green',position:'absolute',right:'-12px'},
                  }} >
                  <StepLabel sx={{float:'right', marginRight:'20px'}} >{steps.label}</StepLabel>
                  <StepContent sx={{color:'#bdbdbd',}}>
                    <Typography sx={{ float:'right',fontSize:'12px !important', paddingRight:'5px', borderRight:'none'}}>{steps.description}</Typography>
                  </StepContent>
                </Step>
              ))}


            </Stepper>
          </Box>
        </div>
        <div className='col-sm-4'>

        </div>

      </div>

    );
  }