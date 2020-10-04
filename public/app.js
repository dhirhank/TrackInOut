console.log(firebase)

const signInButton = document.getElementById('signIn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers
signInButton.onclick = () => {
    auth.signInWithPopup(provider);

    firebase.auth().onAuthChanged(function(user) {
        if (user) {
            email = user.email;

            var emailRoom = db.collection("RoomAssign").doc(email);

            emailRoom.get().then(function(doc) {
                if(doc.exists) {
                    window.location.replace("./admin-main.html");
                    console.log("Document data:", doc.data());
                } else {
                    console.log("No Document Found");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            }); 
        }
    });

}
