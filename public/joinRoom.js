window.onload() = () => {
    alert("")
}

console.log(firebase);

const submitCode = document.getElementById('roomSubmit');
var code = document.getElementById('inputRoomCode');

submitCode.onlick = () => {
    var check = db.collection('Room');
    alert(check);

}