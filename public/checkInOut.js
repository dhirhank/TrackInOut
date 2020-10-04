
var db = firebase.firestore();


// var inState = true;
// var outState = false;
// var button = "";


// const submitButton = document.getElementById('Submit');

// const checkInBtn = document.getElementById('checkIn');
// const checkOutBtn = document.getElementById('checkOut');

// checkInBtn.onclick = () => {
//     console.log("hello World")
//     if(inState == true){
//       inState = false;
//       outState = false;  
//     }
    
// }

// checkOutBtn.onclick = () => {
//     console.log("hello 112")
//     outState = true;
//     if(outState == false){
//         outState = true;  
//         inState = false;
//       } 
      
// }

// if(inState == true){
//         button = checkIn;
//     }

//     else{
//         button = checkOut;
//     }



submitButton.onclick = () => {
      console.log(inState)
    
    
      var inputName = document.getElementById("Name").value;
      var inputTime = document.getElementById("time").value;
      var inputReason = document.getElementById("Reason").value;
  
      if(inState == true){
                button = checkIn;
            }
        
            else{
                button = checkOut;
            }
  
  
      async function asyncCall() {
          const docRef = db.collection('Dhirhan').doc('ohohoh');
  
          await docRef.set({
              tooot: [inputName, inputTime, inputReason, button]
          });
      }
      asyncCall();

   

}




