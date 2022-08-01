import React from 'react'
function Content() {
    return (
        <div>
            <div className="container mt-5 mb-32">
                <div className="flex flex-row-reverse mx-auto row">
                    <div className="mx-auto col-sm-7">
                        <img src="assets/images/brand.png" className="img-fluid" alt="brand" />
                    </div>
                    <div className="mt-5 col-sm-5">
                        <p className="mt-5 float-start display-1">Sewer Line Inspections</p>
                        <h5 className="my-4 text-base leading-loose float-start ">SLIFOXX is the fastest way to book and schedule your sewer line inspection</h5>
                        <div className='row'>
                            <div className="d-flex justify-content-sm-start justify-content-center ">
                                <button className="px-5 py-2 mt-5 rounded-full text-light btn btn-warning rounded-pill">Learn more</button>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-light d-none d-sm-block">
                            <i className="p-4 border border-2 text-danger bi-caret-down-fill rounded-circle border-1"></i><span className="pl-3">Scroll down to see more</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row-reverse mx-auto my-5 row">
                    <div className="mx-auto col-sm-7">
                        <img src="assets/images/inspection2.png" className="img-fluid w-100" alt="inspection2" />
                    </div>
                    <div className=" col-sm-5">
                        <p className="mt-5 text-warning"> -Who we are</p>
                        <h1 className="float-start ">Fast and Thorough Sewer Line InspectionTap into our network of sewer line pro's to get the job right</h1>
                        <div className='row'>
                            <div className="mt-5 d-flex justify-content-sm-start justify-content-center">
                                <button className="px-5 py-2 mt-8 text-white bg-dark rounded-pill">Schedule now</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex row">
                    <div className="pt-20 pb-12 text-center">
                        <img src="assets/images/service.png" className="img-fluid" alt="service" />

                    </div>
                    <h1 className="mt-32 text-2xl text-center uppercase sm:text-5xl">common sewer line issues</h1>
                    <h5 className="text-base leading-loose text-center">Here are some of the most common issues you would want to know</h5>
                    <h5 className="text-base leading-loose text-center">about...</h5>
                </div>
                <div className="flex mx-auto mt-5 row">
                    <div className=" col-sm-4">
                        <div className="flex">
                            <img src="assets/images/damaged_sewer_line0.jpg" className="img-fluid w-100" alt="damaged_sewer_line0" />
                        </div>
                        <h1 className="mt-5">heading example one more thing</h1>
                        <h5 className="my-4">A sewer line belly occurs when the sewer line sags downward, creating a curved shape that impedes the natural flow. This flaw in the pipe causes standing water and sediment collecting, leading to erosion and blockages for the homeowner,standing water and sediment collecting</h5>
                        <div className="pt-4 pb-2 pr-4 text-right ">
                            <button className="pb-5 border-0 float-end .bg-transparent">
                                <i className="p-3 text-danger bi-caret-right-fill .bg-transparent"></i>

                            </button>
                        </div>
                    </div>
                    <div className=" col-sm-4">
                        <div className="flex">
                            <img src="assets/images/damaged_sewer_line1.jpg" className="img-fluid w-100" alt="damaged_sewer_line1" />
                        </div>
                        <h1 className="mt-5">heading example one more thing</h1>
                        <h5 className="my-4">A sewer line belly occurs when the sewer line sags downward, creating a curved shape that impedes the natural flow. This flaw in the pipe causes standing water and sediment collecting, leading to erosion and blockages for the homeowner,standing water and sediment collecting</h5>
                        <div className="pt-4 pb-2 pr-4 text-right">
                            <button className="pb-5 border-0 float-end .bg-transparent">
                                <i className="p-3 text-danger bi-caret-right-fill .bg-transparent"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="flex">
                            <img src="assets/images/damaged_sewer_line2.jpg" className="img-fluid w-100" alt="damaged_sewer_line2" />
                        </div>
                        <h1 className="mt-5">heading example one more thing</h1>
                        <h5 className="my-4">A sewer line belly occurs when the sewer line sags downward, creating a curved shape that impedes the natural flow. This flaw in the pipe causes standing water and sediment collecting, leading to erosion and blockages for the homeowner,standing water and sediment collecting</h5>
                        <div className="pt-4 pb-2 pr-4 text-right .bg-transparent">
                            <button className="pb-5 border-0 float-end">
                                <i className="p-3 text-danger bi-caret-right-fill .bg-transparent"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;