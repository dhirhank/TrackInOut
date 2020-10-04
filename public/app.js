var db = firebase.firestore();

console.log(firebase)

const signInButton = document.getElementById('signIn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers
signInButton.onclick = () => {

    signInButton.disabled = true;

    firebase.auth().signInWithPopup(provider).then(function(result) {

        var user = firebase.auth().currentUser;
        var emailo;
        var code = '';

        if (user != null) {
            user.providerData.forEach(function (profile) {
                var email = profile.email;
                emailo = email;
            });
        }


        function genKey() {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var charactersLength = characters.length;
            for ( var i = 0; i < 6; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }

         code = genKey();

         //create collection & doc
         db.collection('Users').doc(emailo).collection(code).doc("Jaimin").set({

         });

         window.location.replace("./admin-main.html");


    }).catch(function(error) {

    });
       
}


