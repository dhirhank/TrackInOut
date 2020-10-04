//console logs
console.log(firebase)

const signInButton = document.getElementById('signIn');

signInButton.onclick = () => {
var newuser = AdditionalUserInfo.isNewUser();
var email = user.email;

if (newuser) {
    function generateKey() {
        var code = '';
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var cLength = characters.length;

        //generating room code
        for (var i = 0; i <= 6; i++) {
            code += characters.charAt(Math.floor(Math.random() * cLength));
        }

        //creating a new room
        db.collection("RoomAssign").doc(email).set({
            roomCode: code,
        })
    }

 } 
}

