import React, { useContext, useEffect, useState } from 'react'
import { Userconstruct } from '../../App'
import Navber from '../homepage/navber/Navbar'

function Constomarorder() {

    const  [loginuser,setLoginuser]=useContext(Userconstruct)
    
    const [constomarorder,setCostomarorder]=useState([])
    console.log(constomarorder)

    useEffect(() =>{
        fetch('http://localhost:5000/contomarservice',{
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            body: JSON.stringify({email: loginuser}) 
        })
       
        .then(respose=>respose.json())
        .then(data=>setCostomarorder(data))

    },[])
    return (
        <div>

            <Navber></Navber>
          <table class="table">
          <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">servicename</th>
      <th scope="col">phonenumber</th>
      <th scope="col">address</th>
      <th scope="col">order cancle</th>
    </tr>
  </thead>
  <tbody>
{
    constomarorder.map((constomarorder,index)=>    <tr>
        <th scope="row">{index+1}</th>
        <td>{constomarorder.servicename}</td>
        <td>{constomarorder.number}</td>
        <td>{constomarorder.address}</td>
           <button>order cancle</button>
      </tr>)
}
    </tbody>
          </table>
        </div>
    )
}

export default Constomarorder
