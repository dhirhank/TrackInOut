
var db = firebase.firestore(); 


const testbtn = document.getElementById('test');

testbtn.onclick = () => {

    async function asyncCall() {
        const docRef = db.collection('users').doc('alovelace');

        await docRef.set({
            first: 'Ada',
            last: 'Lovelace',
            born: 1815
        });
    }
    asyncCall();

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


