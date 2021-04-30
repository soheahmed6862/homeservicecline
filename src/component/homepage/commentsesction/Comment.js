import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import Loading from '../../loadding/Loading';

const Comment = () => {

    const [commnet,setComment]=useState([])
    const [islodding,setIslodding]=useState(true)
      console.log(commnet)
    useEffect(()=>{

        fetch('http://localhost:5000/commentlist')
        .then(Response=>Response.json())
        .then(data=>{
          setComment(data)
          setIslodding(false)
        })
        
    },[])
    return (
        <div className="container m-5">
            <div className="row">
        <h1 className="text-center">Customar revio</h1>

           { islodding? <Loading></Loading> :
               commnet.map(cm=>
                 
                <div className="col-md-4">
                     <div class="card" style={{width: "18rem"}}>
  <div class="card-body">

    <p class="card-text">{cm.comments}</p>
   
  </div>
</div>
               </div>
               
            )
           }


   



            </div>
  
        </div>
    );
};

export default Comment;