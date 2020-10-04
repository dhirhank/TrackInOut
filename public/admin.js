var db = firebase.firestore();

console.log(firebase)

function admin() {
    var user = firebase.auth().currentUser;
    var email = user.email;

var roomCode = db.collection("RoomAssign").doc(email);

roomCode.get().then(function(doc) {
    if(doc.exists) {
        console.log("Document data:", doc.data());
        var rC = doc.data();
    } else {
        console.log("No Document Found");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

var userInfo = db.collection("Rooms").doc(rC);

userInfo.get().then(function(doc) {
    if(doc.exists) {
        console.log("Document data:", doc.data());
        var fieldData = doc.data();
    } else {
        console.log("No Document Found");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

document.getElementById('test').innerHTML = fieldData;
}

