import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from 'firebase';
import { AuthContext } from "./AuthConnect";


const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseConfig
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
            alert(error);
    }
},
    [history]
);

    const { currentUser } = useContext(AuthContext);
    
    if (currentUser) {
        return <Redirect to="/" />;
        
}

    return (
        <div className="container-md">
                    <h1>Log in</h1>    
                    <form onSubmit={handleLogin}>
                        <label class="container">
                            Email
                            <input name="email" 
                            type="email" 
                            placeholder="email" />
                            </label>              
                        <label class="container">
                            Password
                    <input name="password" 
                    type="password" 
                    placeholder="password" />
                        </label>
                    <button href="#" class="myButtonB" type="submit">log in</button>
            
            </form>    
            </div>
        
    );
};

export default withRouter(Login);



