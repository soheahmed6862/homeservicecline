import React, { useEffect, useState } from 'react';
import Loading from '../../loadding/Loading';
import Navber from '../navber/Navbar';


import ServicesItem from './ServicesItem';


const Service = () => {
    const [result,setRuselt]= useState([])
    const [islodding,setIslodding]=useState(true)
    console.log(result)
  
    useEffect(() =>{

        fetch('http://localhost:5000/product')
        .then(response =>response.json())
        .then(data =>{
          setRuselt(data)
          setIslodding(false)
        })
           
      },[])



 
    
      

    return (

    
        <div>


              <h1 className="text-center">ourservice</h1>

   {
          
       islodding?  <Loading></Loading> :  <div className="container">
            <div className="row">
            
    
            {
              result.map(result=> <ServicesItem result={result}></ServicesItem>
              )  
           }

          
            </div>
            
          </div>
   }
           

        </div>
    );
};

export default Service;