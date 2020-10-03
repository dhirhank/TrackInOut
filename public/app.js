console.log(firebase)

const signInButton = document.getElementById('signIn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers
signInButton.onclick = () => auth.signInWithPopup(provider);