import React, { useEffect, useState } from 'react'
import firebaseConfig from '../tools/firebase';
import { usersCollection } from '../tools/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    const [userDetails, setUserDetails] = useState('')

    useEffect(() => {

        if (currentUser != null) {
            usersCollection
            .doc(currentUser.uid)
            .get()
            .then(snapshot => {
                setUserDetails(snapshot.data())
                console.log(currentUser);
        })
        }
    }, [currentUser]);

    return (
        <AuthContext.Provider
            value={{currentUser, userDetails}}
        >
            {children}
        </AuthContext.Provider>
    );
};