
var db = firebase.firestore();

const testbtn = document.getElementById('test');

testbtn.onclick = () => {

/*     var inputPun = document.getElementById("testID").value;
    var inputCategory = document.getElementById("Category").value;
    var inputText = document.getElementById("PunText").value; */

    db.collection('testCollection').doc(testID).set({
        Category: "test",
        PunText: "test"
    })
        .then(function () {
            console.log("Doc successful");
        })
        .catch(function (error) {
            console.error("Error writing doc", error);
        });
}


/* const checkInBtn = document.getElementById('checkIn');
const checkOutBtn = document.getElementById('checkOut');

checkInBtn.onclick = () => {
    console.log("hello World")
    (this).button("toggle");

}

checkOutBtn.onclick = () => {
    console.log("hello 112")
    (this).button("toggle");

} */






// if(document.getElementById('Check In').onclick == function() {
//    alert("You clicked me");
// }​);​

// if(document.getElementById('Check Out').onclick == function() {
//    alert("You clicked me");
// }​);​



// console.log(firebase)

// const signInButton = document.getElementById('signIn');

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// /// Sign in event handlers
// signInButton.onclick = () => auth.signInWithPopup(provider);


