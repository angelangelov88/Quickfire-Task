//Countdown timer
var date = new Date();
var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();

var leftHour = 23 - hour;
var leftMinute = 59 - minute;
var leftSeconds = 59 - second;


var leftTime = (leftHour * 3600) + (leftMinute * 60) + leftSeconds;
var timer = document.getElementById('countdown');

setInterval(updateTimer, 1000);

function updateTimer() {
    var h = Math.floor(leftTime / 3600);
    var m = Math.floor((leftTime - (h * 3600)) / 60);
    var s = Math.floor(leftTime % 60);


    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    timer.innerHTML =  "Order in the next <b>" 
    + h 
    + ":" 
    + m 
    + ":" 
    + (s) 
    + "</b> for next day delivery";

    leftTime--;
}




//Function to open the size guide
const sizeModal = document.getElementById('size-modal')

function openCloseModal() {
  if (sizeModal.style.display == 'block') {
    sizeModal.style.display = 'none'
  } else {
    sizeModal.style.display = 'block'
  }
}



