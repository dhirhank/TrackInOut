
var db = firebase.firestore();

const submitButton = document.getElementById('Submit');

submitButton.onclick = () => {

    var inputName = document.getElementById("Name").value;
    var inputTime = document.getElementById("time").value;
    var inputReason = document.getElementById("Reason").value;

    const rbs = document.querySelectorAll('input[name="options"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }

    db.collection('Brown').doc('test').set({
        name: inputName,
        time: inputTime,
        reason: inputReason,
       inOut: selectedValue
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
