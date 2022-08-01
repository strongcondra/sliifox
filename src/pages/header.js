/* eslint-disable */ 
import { Outlet, Link } from "react-router-dom";
import React from 'react'
import { SignContext } from '../App.js';
import styles from './style.css';
function Header() {
    const { signIn, setSignIn } = React.useContext(SignContext);

    return (
        <div>
            <nav className="navbar navbar-expand-sm sticky-top pt-0 ">
            <div className="container" style={{backgroundColor: "#F0F8FF"}}>
                <a className="navbar-brand" href="">
                    <img src="assets/images/logo.png" alt="logo"/>
                </a>
                <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="mx-auto mb-3 navbar-nav list-unstyled">
                        <li className="nav-item active">
                                <div className="px-3" ><Link to="/home"   className="link-dark text-decoration-none nav-link">Home</Link></div>

                        </li>
                        <li className="nav-item">
                         
                                <div className="px-3 " ><Link to="service"  className="link-dark text-decoration-none nav-link">Service</Link></div>
                            
                        </li>
                        <li className="nav-item">
                           
                                <div className="px-3 text-danger" ><Link to="faq"  className="link-dark text-decoration-none nav-link">Faq</Link></div>
                            
                        </li>
                        <li className="nav-item">
                           
                           <div className="px-3 text-danger" ><Link to="step"  className="link-dark text-decoration-none nav-link">Step</Link></div>
                       
                        </li>

                    </ul>
                    <div className="flex flex-row-reverse m-3">
                        {signIn && (
                            <button type="button" className="btn btn-secondary rounded-pill text-light" onClick={()=>{setSignIn(false)}} >Log Out</button>

                        )}
                        <button type="button" className="btn btn-warning rounded-pill text-light">Need help?</button>
                    </div>
                </div>

            </div>
            </nav>
            <Outlet />
        </div>
    )
  }
  
  export default Header;