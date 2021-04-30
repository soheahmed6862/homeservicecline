import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading= () => {
    return (
        <div className="text-center">
             <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        
 
      />
        </div>
    );
};

export default Loading;