import React from 'react';
import About from '../about/About';
import Header from '../header/Header';
import Navber from '../navber/Navbar';
import Service from '../service/Service';


const Home = () => {
    return (
        <div>
         <Navber></Navber>
         <Header></Header>
         <About></About>
         <Service></Service>
        </div>
    );
};

export default Home;