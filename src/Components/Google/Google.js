import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const Google = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({})
    const {displayName, email, photoURL} = user;
    const SignIn = () =>{
    firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            setUser(user)
            console.log(user)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
    }
    return (
        <>
            <button onClick={SignIn}>Google Sign In</button>
            {/* <h1>Name: {displayName}</h1>
            <h1>Email: {email}</h1>
            <img src={photoURL} alt=""/> */}
        </>
    );
};

export default Google;