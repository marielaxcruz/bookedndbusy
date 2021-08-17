// info on using brackets, when you wrap into brackets it means you are exporting something ad not doing an exporting defualt, if you want to import a default you dont need the brackets 
import React, {Component} from 'react';
import {firebaseLooper} from '../tools/firebaselooper';
import { usersCollection } from '../tools/firebase';
// when this components loads I want to go to the database and fetch the data 
class AllAdventures extends Component {
    
    state = {
        users: null
    }
    // updates made using reference, this allows you to export different collections and use them
    componentDidMount(){
        usersCollection
        .get()
        .then(snapshot =>{
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
                    <th> {data.locations}</th>
                    <th> {data.day}</th>
                    <th> {data.journalentry}</th>
                    <th> {data.travelphotos}</th>
                </tr>

            

            ))
        : null
    )
    render(){
        //const users = this.state.users;
        console.log("rendering user locations")
        return(
            <main  class="container">
                <table className="table table-light">
                    <thread>
                        <tr>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Journal Entry</th>
                            <th>Photos</th>
                        </tr>
                    </thread>
                    <tbody>
                        {this.handleUserData(this.state.users)}
                    </tbody>

                </table>
            </main>
        )
    }
}

export default AllAdventures;
