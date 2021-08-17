export const firebaseLooper = (snapshot) =>{
    let markers_info = [];
    snapshot.forEach( doc => {
        markers_info.push({
            ...doc.data(),
            id: doc.id

        })
    });
    return markers_info;
};