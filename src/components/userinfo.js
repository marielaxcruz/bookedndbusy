// info on using brackets, when you wrap into brackets it means you are exporting something ad not doing an exporting defualt, if you want to import a default you dont need the brackets 
import React, {Component} from 'react';
import {firebaseLooper} from '../tools/firebaselooper';
import { usersCollection } from '../firebase';
import SideBar from './SideBar';
// when this components loads I want to go to the database and fetch the data 
class Users extends Component {
    
    state = {
        users: null
    }
    // updates made using reference, this allows you to export different collections and use them
    componentDidMount(){
        usersCollection.get().then(snapshot =>{
            //// we get the id and the data printed into the console
            //snapshot.forEach(doc =>{
            //    console.log(doc.id)
            //    console.log(doc.data())
            //})
            const users = firebaseLooper(snapshot);
            //console.log(users)
            this.setState({
                users
            });
        }).catch(e=>{
            console.log(e)
        })
        // reference/pointer to that collection 
        console.log(usersCollection)
    }
    
    handleUserData= (users) => (
        users ?
            users.map((data, i ) => (
                <tr key ={i}>
                    <th> {data.id}</th>
                    <th> {data.name}</th>
                    <th> {data.displayjournal}</th>
                    <th> {data.dates}</th>
                    <th> {data.Journal}</th>
                    {/*<th> {data.entry}</th>*/}
                </tr>

            

            ))
        : null
    )
    render(){
        //const users = this.state.users;
        console.log("rendering users")
        return(
            <main>
                <SideBar />
                <link href="/css/main.min.css" rel="stylesheet"></link>
                <table className="table table-dark">
                    <thread>
                        <tr>
                            <th>ID</th>
                            {/*<th>Location</th>*/}
                            <th>Name</th>
                            <th>Date</th>
                            <th>Display Journal</th>
                            <th>Entry Created</th>
                        </tr>
                    </thread>
                    <tbody>
                        {this.handleUserData(this.state.users)}
                    </tbody>

                </table>
                <p class="text-warning"> I should be able to see all my user info </p>
            </main>
        )
    }
}

export default Users;
