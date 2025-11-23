import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    console.log('AuthProvider user:', user);


    //Observe auth state changes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            console.log('Auth state changed:', currentUser);
            setUser(currentUser);
        });

    return () => unsubscribe();

    }, []);

    //logout function
    const logOut = () => {
         return signOut(auth);
    }


    const authData = {
        user,
        setUser,
        createUser,
        logOut
    };

    return <AuthContext value={authData}>{children}</AuthContext>

};

export default AuthProvider;