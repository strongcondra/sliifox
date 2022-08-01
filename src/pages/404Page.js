import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='row'>
                    <img src="assets/images/pipe3.png" className="img-fluid w-100" alt="inspection2" />
                </div>
                <div className='row'>
                    <h1>OOPS! This page can’t be found</h1>
                </div>
                <div className='row'>
                    Maybe you have missclicked something, or pasted incorrect link
                </div>
                <Link to="/" >
                    <Button >Return to homepage</Button>
                </Link>
            </div>
        </div>
    )
}

export default Error404;
