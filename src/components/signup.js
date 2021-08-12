import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebaseConfig from "../firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/accountsetup");
    } catch (error) {
      alert(error);
    }
  }, [history]);
// const - sending form ann f 
  return (
    <div class="container">
      <h1>Register</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        {/*<label>
          Password Again
          <input name="password" type="password" placeholder="Password" />
        </label>*/}
        <button class="btn btn-primary" type="submit">register</button>
      </form>
    </div>
  );
};
//onClick={(event)=>{event.preventDefault(); history.push("/accountsetup")}
export default withRouter(SignUp);



// return db.collection('users').doc(cred.user.uid).set({
          