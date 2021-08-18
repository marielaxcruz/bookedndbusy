// this component will redirect to the form for adding photos to their adventure  
import React, {useContext, useEffect} from 'react';
import { storageRef , usersCollection} from '../tools/firebase.js'
import SideBar from "./SideBar";
//import { useHistory } from "react-router";
import firebaseConfig from '../tools/firebase';
import { AuthContext } from "./AuthConnect";
import swal from 'sweetalert';


// comment from tutor - Is it the same code that adds new image to that array? Also make sure you the file url is updated first and then you add it to db. If an item already exists in that array, it won't be added again.

function AddNewPhotos(props) {
    //let history = useHistory();
    const handleClick =() => {
    //history.push("/newjournal");
    props.setNext('journal');
    }
    const {currentUser, userDetails} = useContext(AuthContext);
    const [fileUrl, setFileUrl] = React.useState(null);
    const [photos, setPhotos] = React.useState([]);

    const onFileChange = async (e) => {
    const file = e.target.files;
    const storageRef = firebaseConfig.storage().ref();
    const fileRef = storageRef.child(`/user/images/${file.name}`);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
    console.log('this is the Uploaded image', file.name)
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await usersCollection
        .doc(currentUser.uid)
        .collection('locations')
        .doc(props.currentLocation)
        .collection('dates')
        .doc(props.currentDate)
        .update({
            travelphotos: fileUrl
            // firebaseConfig.firestore.FieldValue.arrayUnion(fileUrl),
        })
        .then(() => {
            // function being called to change the state of journal
            swal("Your photos have been added"); 
        })
    
    };
     //attempting to display the photos on the page as they get uploaded 
    useEffect(() => {
        const fetchPhotos = async () => {
        const photoCollection = await 
            usersCollection
            .doc(currentUser.uid)
            .collection('locations')
            .doc(props.currentLocation)
            .collection('dates')
            .doc(props.currentDate)
            .get();
            setPhotos(
                photoCollection.data().travel_photos
                );
            };
        fetchPhotos();
        }, []);

return (
    <div class="container" >
        <div className="row">
        <div className ="col-md-2">
            <SideBar />
        </div>
        <div className ="col">    
            <label class="display-6"> Add Photos </label>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} />
                <button className="myButton"> submit photos</button>
            </form>
        <ul>
            <li >
            <img width="100" height="100" src={userDetails.travelphotos} />
            </li>
        </ul>
    </div>
    </div>
        <div className="row">
            <button 
            onClick={handleClick}  
            className="btn btn-secondary btn-lg btn-block" 
            type="submit">
                Next
            </button>
        </div>
</div>
);
}

export default AddNewPhotos;





// the props that are being passed down is the user id and the lat/lng of pin the user is currently adding photos to their adventure book 
//const UploadNewPhoto = ( { id,lat,lng } ) => {
//    let history = useHistory();
//    const handleClick =() => {
//        history.push("/newjournal");
//    }
//    const handleChange =  (event) => {
//        event.preventDefault()
        
//        const image = event.target.files[0]
//        // const image = await resizeFile(originalImage)
        
//        storageRef.child(`/user/images/${image.name}`)
        
//        .put(image)
//        .then(async(uploadSnapshot) => {
//            // uploadSnapshot.ref.getDownloadURL then changes into a promise. await then takes in the promise 
//            const downloadURL = await uploadSnapshot.ref.getDownloadURL()

//            usersCollection
//            .doc('mari')
//            .collection('locations')
//            .doc('location_1')
//            .collection('dates')
//            .doc("day_1")
//            .update({
            
//                photos : downloadURL,
//            })
            
            
            
//            console.log('this is the Uploaded image', image.name)
//        })
//    }
    
    
//    return(
        
//        <div class="container" >
//            <div className="row">
//            <div className ="col-md-2">
//            <SideBar />
//            </div>
//                <div className ="col-md-2">
//                <h1 class="display-6">Add Photos</h1>
//                <form>
//                <div className='form'>
//                    <input
//                        type='file'
//                        onChange={handleChange}
//                    />
//                </div>
//                <button
//                type='submit'
//                className='btn btn-primary'
//                //onClick={handleUpload}
//                >
//                    Add Photo
//                </button>
//            </form>
//            <div className="row">
//            <button onClick={handleClick}  className="btn btn-secondary btn-lg btn-block" type="submit">Next</button>
//            </div>
//                </div> 
//            </div>
//        </div>
//)
//}
//export default UploadNewPhoto;

