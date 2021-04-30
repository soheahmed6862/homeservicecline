import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons'



function Footer() {
    return (
        <section className="footer ">
        <div className="d-flex justify-content-center ">
            <div className="row w-75 m-5">
                <div className="col-md-3 mt-2">
           <Link style={{fontSize:'13px',color:'gray'}}  to="">Emaergance dantal care</Link>
           <br/>

           <Link style={{fontSize:'13px',color:'gray'}} to="">Treatment of personal Diseases </Link>
           
           <Link style={{fontSize:'13px',color:'gray'}} to="">Treatment of personal Diseases </Link>
           
           <Link style={{fontSize:'13px',color:'gray'}} to="">Treatment of personal Diseases </Link>
           
           <Link style={{fontSize:'13px',color:'gray'}} to="">Treatment of personal Diseases </Link>

           
           <Link style={{fontSize:'13px',color:'gray'}} to="">Treatment of personal Diseases </Link>
           <br/>
       
                </div>
                <div className="col-md-3">
                      <h1 style={{color:'black',fontSize:'20px', textTransform:"uppercase"}}>our service</h1>
                       
                       <li className="" style={{listStyle:"none"}}>
                        <Link  style={{fontSize:'16px',color:'gray',textDecoration:"none"}} to="">Home service </Link></li>
                       <li style={{listStyle:"none"}}><Link style={{fontSize:'16px',color:'gray' , textDecoration:"none"}} to="">Home cline </Link></li>
                       <li style={{listStyle:"none"}}><Link style={{fontSize:'16px',color:'gray',  textDecoration:"none"}} to="">Office cline </Link></li>
                       <li style={{listStyle:"none"}}><Link style={{fontSize:'16px',color:'gray',  textDecoration:"none"}} to="">chiken cline </Link></li>
                       <li style={{listStyle:"none"}}><Link style={{fontSize:'16px',color:'gray',  textDecoration:"none"}} to="">Gerden cline </Link></li>
                </div>
                <div className="col-md-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora?</p>
                </div>
                <div className="col-md-3">
              <h2>Our Location</h2>

              <p>durgapur sadar cumilla</p>
              <p>numeber: 01632070387</p>
               
               <div className="mt-5 mb-3 icon">
        

           
              <a href="https://www.facebook.com/sohelahmed67/"> <FontAwesomeIcon style={{fontSize:'20px'}} icon={faFacebook} /></a>
              <a href="#"> <FontAwesomeIcon icon={faTwitter} style={{fontSize:'20px'}}  /></a>
          

               </div>
                
                </div>
            </div>
        </div>
        
    </section>
    )
}

export default Footer
