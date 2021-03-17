import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

const Email = () => {
    const [user, setUser] = useState({})
    const SignIn = (e) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                var user = result.user;
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
            e.preventDefault();
    }
    return (
        <>
            <form  onSubmit={SignIn}>
                <input type="email" name="email" placeholder="Your email" required />
                <input type="password" name="password" placeholder="Your password" required />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Email;