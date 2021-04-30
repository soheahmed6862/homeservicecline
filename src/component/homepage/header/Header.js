import React from 'react';
import './Header.css'
import img from '../../../image/banner_ilstration.png'
const Header = () => {
    return (
        <div className="color">
            <div className="container ">
                <div className="row d-flex ">
                    <div className="col-md-6 mt-5">
                        <h1>We'll make sure that the space around you being sparkling clean</h1>
                        <p>Our best-in-class WordPress solution, wiadditional
                          optimization to make running online storer.</p>

                          <div>
                            <div>
                                <button type="">take our service </button>
                            </div>
                                <p>what is our work</p>
                          </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className="homeimg" data-depth="0.5" >
                          <img src={img} alt=""/>
                          
                      </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;