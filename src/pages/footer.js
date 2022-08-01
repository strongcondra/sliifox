import React from 'react'
function Footer() {
    return (
        <div>
            <div className='container-fluid border-2 border-top mt-5'>
                
            </div>
            <div className="container mt-5" >
                <div className="flex flex-row-reverse mx-auto mt-24 border-2 row">
                    <div className="col-sm-4">
                        <div className="text-center">
                            <button className="px-5 py-2 mt-4 bg-white btn-light text-danger rounded-pill">Learn more</button>
                        </div>                 
                    </div>
                    <div className=" col-sm-4">              
                    </div>
                    <div className="pt-4 col-sm-4 ">
                        <ul className="float-end list-unstyled">
                            <li >Sillifox Pipe Fixing</li>
                            <li>Kochsgade 31D, 2nd floor 5000</li>
                            <li>Odense C Denmark</li>
                        </ul>       
                    </div>
                </div>
            </div>
        </div>

    )
  }
  
  export default Footer;