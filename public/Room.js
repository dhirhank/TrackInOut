var db = firebase.firestore();

//console logs
console.log(firebase)

const signInButton = document.getElementById('signIn');

signInButton.onclick = () => {
    var email = user.email;
    var code = '';

    function generateKey() {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var cLength = characters.length;

        //generating room code
        for (var i = 0; i <= 6; i++) {
            code += characters.charAt(Math.floor(Math.random() * cLength));
        }
    } 

    //creating a new room
    async function asyncCall() {
        const docRef = db.collection("RoomAssign").doc(email);
        
        await docRef.set({
            roomCode: code,
        });
    }
    asyncCall();

}

