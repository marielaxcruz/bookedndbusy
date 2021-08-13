import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from 'firebase';
import { AuthContext } from "../auth.js";


class CheckLogin extends Component {
    state = {
        register : false,
        loggedIn : false,
        user: {
            email:'',
            password: ''
        }
    }
    
    const [loggedIn, setLoggedIn]  = useState('');
        useEffect(() => {
            
            firebase.auth().onAuthStateChanged( (user) => {
                if (user) {
                    setLoggedIn(true)
                }else{
                    setLoggedIn(false)
                }})
            }, []);

export default CheckLogin;        