import React, { useEffect, useState } from 'react'
import Navber from '../homepage/navber/Navbar'

function Showorder() {

const [order,setOrder]=useState([])
console.log(order)


useEffect(() =>{
    fetch('http://localhost:5000/getorder')
    .then((response=>response.json()))
    .then(data=>setOrder(data))

},[])




    return (
        <div>
            <Navber></Navber>
         <table  class="table table-bordered table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">servicename</th>
      <th scope="col">customarname</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>
   {
       order.map((order,index) =>
       <tr>
             <td>{index+1}</td>
    
       <td>{order.servicename}</td>
       <td>{order.name}</td>
       <td>{order.email}</td>
       <td>{order.address}</td>
       <td>{order.number}</td>
     </tr>
       
       )
   }
   
  </tbody>
</table>
        </div>
    )
} 

export default Showorder
