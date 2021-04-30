import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [commnet,setComment]= useState({
      comments:''
  })
  console.log(commnet)
  const handlecomment=(e)=>{
    const newComment= {...commnet}
    newComment[e.target.name]=e.target.value
    setComment(newComment)

  

  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
 
      return;
    }


    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

const handlecommentsubmit= (e) => {

e.preventDefault();
    fetch('http://localhost:5000/comment',{
  
        method: 'POST',
        headers: {'Content-Type': 'application/JSON'},
        body: JSON.stringify(commnet) 

      })
     
      .then(success=>{
        console.log(success,"data is find")
      })

      


   e.target.style.display ="none"
  

}


  



  return (
  <div>
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>

    <div className="m-5">
        <h1>please give your opinion</h1>
        <form onSubmit={handlecommentsubmit} >
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" onBlur={handlecomment} name="comments" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <input type="submit" value="Submit"/>
        </form>
    </div>
  </div>
  

  );
};
export default CheckoutForm;