/* eslint-disable */ 
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AuthService from "../../services/authService.js";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const MAX_LENGTH = 8;

export default function SignUp(props) {
  const [text, setText] = React.useState("");
  const [lastName, setLastName]=React.useState('');
  const [firstName, setFirstName]=React.useState('');
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorLastName, setErrorLastName] = React.useState("");
  const [errorFirstName, setErrorFirstName] = React.useState("");
  const [message, setMessage]=React.useState('');
  const [errorEmail, setErrorEmail]=React.useState('');

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  React.useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (text.length <= MAX_LENGTH) {
      setErrorMessage(
        "The input has at least 8 charactors!"
      );
    }
    if (lastName.length == 0) {
      setErrorLastName(
        "Please insert field!"
      );     
    }
    if (firstName.length == 0) {
      setErrorFirstName(
        "Please insert field!"
      );    
      if (!isValidEmail(message)) {
        setErrorEmail('Email is invalid');
      } 
    }

  }, [text,lastName,firstName,message]);

  React.useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (text.length > MAX_LENGTH && errorMessage) {
      setErrorMessage("");
    }
    if (lastName.length > 0) {
      setErrorLastName("");
    }
    if (firstName.length > 0) {
      setErrorFirstName("");
    }
    if (isValidEmail(message)) {
      setErrorEmail("");
    }
  }, [text, errorMessage,lastName,errorLastName,firstName,errorFirstName,message,errorEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('email') ==="" || data.get('password') ==="" ||data.get('firstName') ==="" ||data.get('lastName') ===""){
      NotificationManager.error('Error Message', 'Fill every blanks!', 5000);

    }else{
      AuthService.userRegister(data.get('email'), data.get('password'), data.get('firstName'), data.get('lastName')).then(
        (response) =>{  
          props.changePage(false)
          // document.location.href="/login"
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }
    

 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus

                  error={firstName.length ==0}
                  helperText={errorFirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"

                  error={lastName.length ==0}
                  helperText={errorLastName}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  helperText={errorEmail}
                  name="email"
                  error={!isValidEmail(message)}
                  autoComplete="email"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"

                  error={text.length <= MAX_LENGTH}
                  helperText={errorMessage}
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <div className='row md-flex mx-auto'>
              <button type="button" className="btn  btn-success w-100" onClick={()=>{props.changePage(false)}} >Sign In</button>

            </div>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <NotificationContainer />

    </ThemeProvider>
  );
}
