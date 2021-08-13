import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from 'firebase';
import { AuthContext } from "../auth.js";


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
        return <Redirect to="/home" />;
        
}

    return (
        <div  class="container">
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
            <label>
            Email
            <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
            Password
            <input name="password" type="password" placeholder="Password" />
            </label>
            <button class="btn btn-primary" type="submit">Log in</button>
        </form>
        </div>
    );
};

export default withRouter(Login);