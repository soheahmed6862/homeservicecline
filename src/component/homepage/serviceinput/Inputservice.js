import React, { useEffect, useState } from 'react';
import Navber from '../navber/Navbar';



const Inputservice = () => {

    const [user,setUser]=useState({})

    const [file,setFile] = useState(null)


   

    const handelBure=(e)=>{
       const newUser={...user}
 newUser[e.target.name]=e.target.value
        setUser(newUser)

    }
const handlFilechange=(e)=>{
    console.log(e.target.value)
    const newFile=e.target.files[0]
    setFile(newFile)

    
}



const handleSubmit=(event)=>{
    event.preventDefault()

    const formData = new FormData()
    formData.append('file', file)
    formData.append('discription', user.discription)
    formData.append('servicename', user.servicename)
    formData.append('price',user.price)
    formData.append('quantity', user.quantity)
  console.log(user.discription)
    fetch('http://localhost:5000/adservice', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}





    return (
        <div>
              <Navber></Navber>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        sitebar
                    </div>
                     

                    <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
  
  <div className="form-group form-check">

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">service name</label>
    <input type="text" className="form-control" onBlur={handelBure} name="servicename" placeholder="service name"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">discription</label>
    <textarea className="form-control" onBlur={handelBure}  name="discription"  rows="3"></textarea>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">quantity</label>
    <textarea className="form-control" onBlur={handelBure}  name="quantity"  rows="3"></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">price</label>
    <input type="number" className="form-control" onBlur={handelBure}  name="price" />
  </div>

    <input type="file"  onChange={handlFilechange} className="form-check-input" />
    <label className="form-check-label" name="img" htmlFor="exampleCheck1">upload file</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>

            <div>
  
            </div>
        </div>
    );
};

export default Inputservice;