import React, { useEffect } from 'react';
import { useHistory ,} from 'react-router';
import {Link } from 'react-router-dom'

const ServicesItem = ({result}) => {
    const history=useHistory()
  

    const handlechange = ()=>{
     
        history.push(`/Serveicedetails/${result._id}`)


    }
    return (
        <div className="col-md-4"  >
            
            <img src={`data:image/jpeg;base64,${result.image.img}`} style={{width:'300px'}} alt="img"/>



                 <p>{result.servicename} </p>
                 <p>{result.discription}</p>

        <button onClick={handlechange }>read more</button>
        </div>
    );
};

export default ServicesItem;