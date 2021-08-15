import React, { useCallback, useContext, useHistory, useState  } from "react";
import { withRouter } from "react-router";
import firebaseConfig from "../tools/firebase";
import { AuthContext } from "./AuthConnect";
import { usersCollection} from '../tools/firebase.js'
import ProfilePic from './ProfilePic';

const SignUp = ({ history }) => {

  const savingUserInfo = (data, email, password, userName, userBio) => {

      usersCollection
      .doc(data.user.uid)
      .set({
          email: email,
          password: password,
          name: userName,
          bio: userBio
      })
  }

  const handleSignUp = useCallback(async event => {
      event.preventDefault();
      //const [ userName, userBio, email, password ] = event.target.elements;
      console.log(event.target.elements)
      const email = event.target.elements["email"].value
      const password = event.target.elements["password"].value
      const userName = event.target.elements["userName"].value
      const userBio = event.target.elements["userBio"].value
      console.log(email)
      try {
          await firebaseConfig
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then( (data) => {
                savingUserInfo(data, 
                  email, 
                  password,
                  userName, 
                  userBio);
              }
              );
          history.push("/");
      } catch (error) {
          alert(error);
      }
  }, [history]);


  return (
      <div class="container">
        <div className="row">
        <div className ="col">
          <h1>Register</h1>
          </div>
          <form onSubmit={handleSignUp}>
          <div className="row">
          <label>
              Email:
              </label>
              <input 
                  placeholder="email" />
        </div>
        <div className ="col">
          <label>
              Password:
              <input 
                  name="password" 
                  type="password" 
                  placeholder="password" />
          </label> 
          </div> 
          <div className="row">     
          <label>
              Name:
              <input 
                  name="userName" 
                  type="text" 
                  placeholder="name" />
          </label>
          </div> 
          <div className ="col"> 
          <label>
            Bio:
              <input 
                  name="userBio" 
                  type="text" 
                  placeholder="if I could teleport anywhere it would be ..." />
          </label>
          </div>
          <div className="row">
          <label>
              <ProfilePic />
          </label>
</div>
          <button class="myButtonB"  type="submit">register</button>
          </form>
      </div>
      </div>
  );
};

export default withRouter(SignUp);





//const SignUp = ({ history }) => {
//    const handleSignUp = useCallback(async event => {
//      event.preventDefault();
//      const authContext = useContext(AuthContext);
//      const { email, password } = event.target.elements;
//      const [userBio, setUserBio] = useState('')
//      const [userName, setUserName] = useState('')
//      try {
//        await firebaseConfig
//          .auth()
//          .createUserWithEmailAndPassword(email.value, password.value);
//          .then((auth)) => {
//            if (auth) {
//              console.log(auth.user)
//              usersCollection
//              .doc(auth.user.uid)
//              .set({
//                name: userName, 
//                bio: userBio,})
//            }
//          })
//        history.push("/accountsetup");

//      } catch (error) {
//        alert(error);
//      }
//    }, [history]);
//  // const - sending form ann f 
//    return (
//      <div class="container">
//        <h1>Register</h1>
//        <form onSubmit={handleSignUp}>
//          <label>
//            Email
//            <input name="email" 
//            type="email" 
//            placeholder="Email" />
//          </label>
//          <label>
//            Password
//            <input name="password" type="password" placeholder="Password" />
//          </label>
//          <label>
//            Name
//            <input name="name"  
//            placeholder="Name"
//            value={userName} 
//            />
//          </label>
//          <label>
//            Bio
//            <input name="bio"  
//            placeholder="Bio" 
//            value={userBio}/>
//          </label>
//          <button class="btn btn-primary" type="submit">register</button>
//        </form>
//      </div>
//    );
//  };
//  export default withRouter(SignUp);
  
  
  
  //// return db.collection('users').doc(cred.user.uid).set({

  //  //onClick={(event)=>{event.preventDefault(); history.push("/accountsetup")}