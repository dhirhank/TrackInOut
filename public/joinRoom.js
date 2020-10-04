console.log(firebase);

const submitCode = document.getElementById('nextCode');
var code = document.getElementById('inputRoomCode').value;

submitCode.onclick = () => {
    var check = db.collection('Rooms');
    alert(check);
}
