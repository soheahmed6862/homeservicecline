import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './FirebaseConfig';
import { Userconstruct } from '../../App';
import { useHistory, useLocation } from 'react-router';
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loginuser,setLoginuser]=useContext(Userconstruct)
  console.log(loginuser)
    var provider = new firebase.auth.GoogleAuthProvider();
    const handlegooglesingin=()=>{

        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    history.replace(from);
    setLoginuser(user.email)
  
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div>
            
            
            <button onClick={handlegooglesingin}>sing in with google</button>

        </div>
    );
};

export default Login;