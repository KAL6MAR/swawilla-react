import React from "react";
import { Link } from "react-router-dom";

function Collection(props) {
    return (
        <div className='hero-wrap hero-bread'>
            <div className='container'>
                <div className='row no-gutters slider-text align-items-center justify-content-center'>
                    <div className='col-md-9 ftco-animate text-center'>
                        <h1 className='mb-0 bread'>Collection</h1>
                        <p className='breadcrumbs'>
                            <span className='mr-2'>
                                <Link to='/'>Home</Link>
                            </span>{" "}
                            <span>Product</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
