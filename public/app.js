console.log(firebase)

const signin = document.getElementById('signIn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers
signin.onclick = () => auth.signInWithPopup(provider);