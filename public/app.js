var db = firebase.firestore();

console.log(firebase)


const signInButton = document.getElementById('signIn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

var inputCode = document.getElementById("inputRoomCode");

2/// Sign in event handlers
signInButton.onclick = () => {

    auth.signInWithPopup(provider).then(function(result) {

        var user = firebase.auth().currentUser;

        if (user != null) {
            user.providerData.forEach(function (profile) {
                var email = profile.email;
            });
        }

        var code = '';

        function generateKey() {
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var cLength = characters.length;
    
            //generating room code
            for (var i = 0; i <= 6; i++) {
                code += characters.charAt(Math.floor(Math.random() * cLength));
            }
        } 
        
        alert(code);
        //creating a new room
        async function asyncCall() {
            const docRef = db.collection(email).doc(code);
        }
        asyncCall();
    }).catch(function(error) {

    });
}

    // firebase.auth().onAuthChanged(function(user) {
    //     if (user) {
    //         var email = user.email;
    //         var code = '';
        
            

    //         var emailRoom = db.collection("RoomAssign").doc(email);

    //         emailRoom.get().then(function(doc) {
    //             if(doc.exists) {
    //                 window.location.replace("./admin-main.html");
    //                 console.log("Document data:", doc.data());
    //             } else {
    //                 console.log("No Document Found");
    //             }
    //         }).catch(function(error) {
    //             console.log("Error getting document:", error);
    //         }); 
    //     }
    // });


