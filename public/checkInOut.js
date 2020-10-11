
var db = firebase.firestore();

const checkInButton = document.getElementById('checkIn');
const checkOutButton = document.getElementById('checkOut');

var roomCode = '';

function getRoom() {
    var url = window.location;
    var realURL = url.href.substr(-6);
    return realURL;
}

roomCode = getRoom();

checkInButton.onclick = () => {
    roomCode = getRoom();
    console.log(roomCode);

    var inputName = document.getElementById("Name").value;
    var inputTime = document.getElementById("time").value;
    var inputReason = document.getElementById("Reason").value;
     
     db.collection('Users').doc('test').collection(roomCode).doc().set({
        name: inputName,
        time: inputTime,
        reason: inputReason,
        InOut: 'In'
    });

}

checkOutButton.onclick = () => {
    roomCode = getRoom();
    console.log(roomCode);

    var inputName = document.getElementById("Name").value;
    var inputTime = document.getElementById("time").value;
    var inputReason = document.getElementById("Reason").value;
    //var inputCheckInBtn = document.getElementById("checkIn").value;
    /* const rbs = document.querySelectorAll('input[name="options"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            } */

     db.collection('Users').doc('test').collection(roomCode).doc().set({
        name: inputName,
        time: inputTime,
        reason: inputReason,
        InOut: 'Out'
        //button = inputCheckInBtn
       /*  inOut: selectedValue */
    });

}




/*     if ('checkIn' == checked) {
            console.log('checkIn')
            button = checkIn;
        }
    
        else {
            button = checkOut;
        } */


    //async function asyncCall() {
        /*         const docRef = db.collection('Brown').doc('ohohoh');
        
                await docRef.set({
                    name: inputName,
                    time: inputTime,
                    reason: inputReason
                }); */

    //asyncCall();
//}
