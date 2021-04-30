import React, { useContext, useState } from 'react'
import { useForm, useFormContext } from "react-hook-form";
import { Userconstruct } from '../../../App';
import Payment from '../../payment/Payment';
import Navber from '../navber/Navbar';


function Orderlist({result}) {


  const  [loginuser,setLoginuser]=useContext(Userconstruct)
  console.log(loginuser)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [paymentdata,setpaymentdata]=useState(null)
    console.log(paymentdata)
    const onSubmit = data => {

      setpaymentdata(data)
     console.log(data)
     console.log(result)

    
     data.servicename=result
     data.email=loginuser
    
          fetch('http://localhost:5000/orderlist',{
  
            method: 'POST',
            headers: {'Content-Type': 'application/JSON'},
            body: JSON.stringify(data) 
  
          })
         
          .then(success=>{
            console.log(success,"data is find")
          })
  
  
      };
    return (
        <div>

          <div style={{display: paymentdata ? 'none' : 'block'}}> 
            
          <h1>if you want to booking please reagistation</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
   
<div class="form-group col-md-6">
      <label htmlFor="inputEmail4">name</label>
      <input type="text" name="name"  
      {...register("name", { required: true })} class="form-control" id="inputEmail4" placeholder="name"/>
    </div>
       
{/* <div class="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" name="email"  
      {...register("email", { required: true })} class="form-control" id="inputEmail4" placeholder="Email"/>
    </div> */}
       
<div class="form-group col-md-6">
      <label htmlFor="inputEmail4">adderss</label>
      <input type="text" name="address"  
      {...register("address", { required: true })} class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
       
<div class="form-group col-md-6">
      <label htmlFor="inputEmail4">number</label>
      <input type="number" name="number"  
      {...register("number", { required: true })} class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
      
      <input type="submit" />
    </form>

          </div>




    <div style={{display: paymentdata ? 'block' : 'none'}}>

<Payment></Payment>

    </div>
        </div>
    )
}

export default Orderlist
