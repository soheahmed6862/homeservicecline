import React from 'react';
import Footer from '../../fotter/Footer';

import About from '../about/About';
import Comment from '../commentsesction/Comment';

import Header from '../header/Header';
import Navber from '../navber/Navbar';
import Service from '../service/Service';


const Home = () => {
    return (
        <div className="home">
         <Navber></Navber>
         <Header></Header>
         <Service ></Service>
         < About></About>
         <Comment></Comment>
      <Footer></Footer>

        </div>
    );
};

export default Home;