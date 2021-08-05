import React, { Component } from 'react';
import {Form, Card, Button} from 'react-bootstrap';


class SignIn extends Component {
    state = {
        formdata:{
            firstname:"",
            lastname:"",
            password:"",
            email:""

        },
        register:false,
        loading:false
    }
    
    handleFormType = () => {
        this.setState(prevState => ({
            register : !prevState.register
        }))
    }
    // a form’s submit button in React will always trigger a browser refresh to submit the data into a backend system. This is bad because the behavior you defined in the onSubmit event function will be ignored by the browser.
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formdata)
        }
    
    // will receive the values and will update the state (this.state) and we will update
    // the formdata
    handleInputs = (event) => {
        let firstname = event.target.name;
        let value = event.target.value;
        this.setState(prevState => ({
            formdata:{
                ...prevState.formdata,
                [firstname]:value
            }
        }))


    }

    render(){
        const {register,formdata,loading} = this.state;
        let formTitle = register ? "Register" : 'Login'
        return (
            <div className ="container login-wrapper">
            <form className="form-signin" onSubmit={this.handleSubmit}>
    <h1 className="h3 mb-3 font-weight-normal">
        {formTitle}
    </h1>
        {
            register ?
        <div>
            <input 
                type="text" 
                id="firstname" 
                name="firstname"
                className="form-control mb-3" 
                placeholder="First Name"
                onChange={this.handleInputs}
                value={formdata.firstname}
            />

            <input 
                type="text" 
                id="lastname" 
                name="lastname"
                className="form-control mb-3" 
                placeholder="Last Name"
                onChange={this.handleInputs}
                value={formdata.lastname}
            />
        </div>
        : null}



    <input 
        type="email" 
        id="email" 
        name="email"
        className="form-control mb-3" 
        placeholder="E-mail"
        onChange={this.handleInputs}
        value={formdata.email}
    />

    <input 
        type="password" 
        id="password" 
        name="password"
        className="form-control" 
        placeholder="Password" 
        onChange={this.handleInputs}
        value={formdata.password}
    />

    <br/>
    <button 
        className="btn btn-lg btn-primary btn-block" 
        type="submit"
        disabled={loading}
    >
        {formTitle}
    </button>

    <div className="mt-3">
        {register ? 'Need to sign in':'Not registered'} ? click
        <span  
            className="login_type_btn" 
            onClick={()=> this.handleFormType()}
        > here </span> 
        to {register ? 'Login':'Register'} 
    </div>
</form>
            </div>
        )
    }
}

export default SignIn;