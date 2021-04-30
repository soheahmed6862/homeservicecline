import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

import { useForm } from "react-hook-form";
import Orderlist from './Orderlist';
import Navber from '../navber/Navbar';

const Serveicedetails = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();



   

    
    const [result,setRuselt]= useState([])

    let { id } = useParams();

    useEffect(() =>{

        fetch(`http://localhost:5000/singleproduct/${id}`)
        .then(response =>response.json())
        .then(information =>setRuselt(information))
      },[])

    return (
        <div>

<Navber></Navber>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                  <p>{result.servicename}</p>
                  <p>{result.quantity}</p>
                  <p>cling reat $ {result.price}</p>
                </div>
                <div className="col-md-6">

                  <Orderlist result={result.servicename}></Orderlist>
                            </div>
                  </div>
     
        </div>
        </div>
    );
};

export default Serveicedetails;