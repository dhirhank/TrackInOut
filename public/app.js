//console log
console.log(firebase)

//sign up feature
var email = document.getElementById("Email").value;
var pass = document.getElementById("Password").value;
var confirmPass = document.getElementById("Password2").value;

//basic details confirmation
if (email.length < 6) {
    alert("Please enter a Valid Email Address");
    return;
}

//basic details confirmation
if (pass.length < 6) {
    alert("Please Enter A Password (At Least 6 Characters)");
    return;
}

//basic details confirmation
function comparePass() {
    var comparison = pass.localeCompare(confirmPass);

    if (comparison != 0) {
        alert ("The Passwords Are Different")
        return;
    }

}

//creating the account
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function, error) {

    //errors
    var errorCode = error.code;
    var errorMsg = error.message;

    if (error) {

    }
}
