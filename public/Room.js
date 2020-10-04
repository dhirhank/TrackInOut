//console logs
console.log(firebase)

var user = firebase.auth().currentUser;

if (user) {
    function generateKey() {
        var code = '';
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var cLength = characters.length;

        //generating room code
        for (var i = 0; i <= 4; i++) {
            code += characters.charAt(Math.floor(Math.random() * cLength));
        }

        //creating a new room
        db.collection("Room").doc(code).set({
        })
    }
 } else {
    db.collection("Room").doc(code).delete().then(function() {
        console.log("Document Deleted");
    }).catch(function(error) {
        console.error("Error Deleting Doc: ", error);
    }); 
 } 
