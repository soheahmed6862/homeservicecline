import React from 'react'
import {Link} from 'react-router-dom'
import './Navber.css'

function Navber() {
    return (
      <div className=" bg-light">
         <div className="container">

<nav class="navbar navbar-expand-lg navbar-light ">
<div class="container-fluid">
<a class="navbar-brand" href="#Home">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav ">

<li class="nav-item mr-3" >  <Link class="nav-link" to="/Home">Home</Link>    </li >
<li><Link  class="nav-link" to="/Service">service</Link></li>
<li class="nav-item">     <Link class="nav-link" to="/Showorder">Showorder</Link></li>

<li>  <Link class="nav-link" to="/Login">login</Link></li>
<li>  <Link class="nav-link" to="/Constomarorder">Constomarorder</Link></li>
<li>  <Link class="nav-link" to="/Inputservice">    Inputservice</Link></li>




</ul>
</div>
</div>
</nav>
</div>
      </div>
       
    )
}

export default Navber
