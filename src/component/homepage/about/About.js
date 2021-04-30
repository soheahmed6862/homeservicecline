import React from 'react';
import './About.css'
import img1 from '../../../image/1.png'

const About = () => {
    return (
        <div className="about"> 
        <div className="container m-5">

        <div className="row">
            <h1 className="text-center m-3"> About Company</h1>
              <div className="col-md-6 ">
                 <img style={{width:'400px'}} src={img1} alt=""/>
              </div>
              <div className="col-md-6 d-flex  align-items-center">

       <div>
       <h1 className="mb-3">    We helps small and mid-size businesses look their best.</h1>

<p>Many towns and cities provide public pools. Many hotels have pool available for their guests to use at their leisur educational Lorem ipsum dolor amet consectetur.</p>
       </div>
              </div>
              
          </div>
        </div>
        </div>
    );
};

export default About;