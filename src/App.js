import Home from "./component/homepage/home/Home";
import Service from "./component/homepage/service/Service";
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./component/homepage/about/About";
import Inputservice from "./component/homepage/serviceinput/Inputservice";
import Serveicedetails from "./component/homepage/service/Serveicedetails";
import Showorder from "./component/showorderlist/Showorder";
import Login from "./component/login/Login";
import PrivateRoute from "./component/privaterouter/PrivateRoute ";
import Constomarorder from "./component/constomarorder/Constomarorder";
export const Userconstruct=createContext()


function App() {

  const [loginuser,setLoginuser]=useState()
  console.log(loginuser)
  return (

    < Userconstruct.Provider value={[loginuser,setLoginuser]}>

<Router>
<Switch>
  <Route path="/Home">
  <Home ></Home>
 
  </Route>
  <Route exact path="/">
  <Home ></Home>
 
  </Route>
 
  <Route path="/Service">
  <Service></Service>
  </Route>
  <Route path="/About">
    <About></About>
  </Route>

<PrivateRoute path="/Constomarorder">
  <Constomarorder></Constomarorder>
</PrivateRoute>
<PrivateRoute path="/Serveicedetails/:id">
<Serveicedetails></Serveicedetails>
</PrivateRoute >
<Route path="/Login">
< Login></Login>

</Route>
<PrivateRoute path="/Showorder">
    <Showorder></Showorder>
  </PrivateRoute>
  <PrivateRoute>
    <Inputservice path="/Inputservice"></Inputservice>
  </PrivateRoute>


</Switch>
</Router>

</Userconstruct.Provider>
  );
}

export default App;
