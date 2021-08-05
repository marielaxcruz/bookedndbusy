import React, { useEffect, useState } from "react";
import firebaseConfig from "./firebase";

// react context api: store our auth status - if we are logged in or not and let our state know who is logged in
// create context allows you to propagate data through the whole react component tree 
export const AuthContext = React.createContext();

// provider component  will store our auth status, will hold user and update every time our status changes in firebase 
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
// will run only once bc of the second paramater being an empty array
    useEffect(() => {
      firebaseConfig.auth().onAuthStateChanged((user) => {
        setCurrentUser(user)
        setPending(false)
    });
}, []);

    if(pending){
        return <div>Loading...</div>
}

return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};