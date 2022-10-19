import React, {createContext, useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    const emailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const emailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    // --------------Very Important----------------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, [auth]);
    // --------------Very Important----------------------

    const authInfo = {
        user,
        emailPasswordRegister,
        emailPasswordSignIn,
        googleSignIn,
        facebookSignIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;