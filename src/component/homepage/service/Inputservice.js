import React, { useState } from 'react';



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
    e.preventDefault()

    const formData = new FormData()
    formData.append('File', file)
  
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



const handleSubmit=(event)=>{
    
}
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        sitebar
                    </div>
                     

                    <div className="col-md-8">
                    <form >
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" onBlur={handelBure} name="email" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" onBlur={handelBure}  name="password" />
  </div>
  <div className="form-group form-check">

    <input type="file"  onChange={handlFilechange} className="form-check-input" />
    <label className="form-check-label" htmlFor="exampleCheck1">upload file</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputservice;