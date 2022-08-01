
/* eslint-disable */ 
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InputText from '../components/input.js'
import MultilineTextFields from '../components/textField.js'
function Service() {
    return (
        <div>
            <div className="container mt-5 mb-32">
                <div className="flex flex-row-reverse mx-auto row">
                    <div className="mx-auto col-sm-7">
                        <img src="assets/images/service1.jpg" className="img-fluid" alt="brand"/>
                    </div>
                    <div className="mt-2 col-sm-5">
                        <div className='row'>
                            <p className="mt-5 display-1">Our Services</p>
                        </div>
                        
                        <div className='row mt-3'>
                            <h5>
                                We offer sewer solutions beginning with an inspection.
                                During the sewer line inspection we look for the following
                            </h5>
                        </div>
                        <div className='row flex '>
                            <div className='col-sm-6'>
                                <p>Sewer line bellies</p>
                                <p>Root intrusion</p>
                                <p>Collapsed pipes</p>
                            </div>
                            <div className='col-sm-6'>
                                <p>Blockage</p>
                                <p>Pipe corrosion</p>
                                <p>Leak detection</p>
                            </div>
                        </div>
                        <div className="float-start">
                            <button className="px-5 py-2 mt-5 rounded-full text-light btn btn-warning rounded-pill">Learn more</button>
                        </div>
                    </div>

                </div>
                <div className="flex  mx-auto my-5 row mt-5">
                    <div className=" col-sm-12">
                        <h1 className="mt-5 text-warning"> Some fresh news from us</h1>
                        <h1 className="float-start display-1">We Also Do Repair Work</h1>
                    </div>
                </div>

                <div className="flex mx-auto mt-5 row">
                    <div className=" col-sm-3">
                        <div className="flex">
                            <img src="assets/images/service2.jpg" className="img-fluid w-100" alt="Service2"/>
                        </div>
                        <h6 className="my-4">Professional septic pumping services - If your property has a septic tank and you notice slow draining toilets and sinks, gurgling noises within the plumbing, and sewage odors you may have a failing septic system. More than likely you will need your septic tank pumped to eliminate any septic tank overflow.</h6>

                    </div>
                    <div className=" col-sm-3">
                        <div className="flex">
                            <img src="assets/images/service3.jpg" className="img-fluid w-100" alt="Service3" />
                        </div>
                        <h6 className="my-4">If you notice a slow drain, gurgling toilets or a foul odor then you may have a sewer leak. We use specialty cameras to determine if this is the case. Our custom equipment can also pinpoint the location of the leak so we can clean up the affected area and repair the problem.</h6>

                    </div>
                    <div className="col-sm-3">
                        <div className="flex">
                            <img src="assets/images/service4.jpg" className="img-fluid w-100" alt="Service4"/>
                        </div>
                        <h6 className="my-4">Main line stoppages can be a total nightmare. When this occurs all of the drains in the house are affected and are non-operational. Our technicians have the knowledge and equipment to identify where the stoppage is and unclog the main line fast and efficient. This process removes roots and cleans the inner walls of the drain.</h6>

                    </div>
                    <div className=" col-sm-3">
                        <div className="flex">
                            <img src="assets/images/service5.jpg" className="img-fluid w-100" alt="Service5" />
                        </div>
                        <h6 className="my-4">Hydro-Jetting uses high-pressure water to scrub away years of accumulated grease, mineral scale, hair balls and debris build-up on the inside walls of your pipes. This high pressure process can even remove tree roots. There is no better way to get your pipes draining as well as the day they were installed, short of replacing them completely.</h6>

                    </div>

                </div>
                <div className='row mx-auto flex d-flex justify-content-center mt-4'>
                    <div className='col-sm-3 text-center'>
                        <button type="button" className="btn btn-secondary rounded-pill m-4 p-3">Ask Your Question</button>
                    </div>
                
                </div>
                <div className='row mx-auto flex d-flex justify-content-center mt-5 text-center'>
                    <h1>Replacing a Collapsed Sewer Line</h1>
                </div>
                <div className='row flex mx-auto mt-5'>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent className='text-center'>
                        <h1>Have your a question and need to speak to someone?</h1>
                        <div className='row flex justify-center mt-5'>
                            <InputText labelValue='Name *'  />
                        </div>
                        <div className='row flex justify-center mt-3'>
                            <InputText labelValue='Email *' />
                        </div>
                        <div className='row flex justify-center mt-3'>
                            <InputText labelValue='Phone *'  />
                        </div>
                        <div className='row flex justify-center mt-3'>
                            <MultilineTextFields />
                        </div>
                    </CardContent>
                    <CardActions>                        
                            <button type="button" className="btn btn-secondary rounded-pill m-4">Ask Your Question</button>                    
                    </CardActions>
                    </Card>
                </div>

                <div className="flex flex-row-reverse mx-auto row mt-5">
                    <div className="mx-auto col-sm-7">
                        <img src="assets/images/service9.png" className="img-fluid" alt="brand"/>
                    </div>
                    <div className="mt-5 col-sm-5">
                        <p className="mt-5 float-start display-5">Why to choose SLIFoxx</p>
                        <h5 className="my-4 text-base leading-loose float-start ">SLIFoxx is the fastest, easiest way to get a detailed report and assessment of your sewer system.<br/>

                            Our network of sewer professionals are available to help identify and correct all types of sewer line problems, big and small.</h5>
                        <div className="float-start">
                            <button className="px-5 py-2 mt-5 rounded-full text-light btn btn-warning rounded-pill">BOOK NOW</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
  }
  
  export default Service;