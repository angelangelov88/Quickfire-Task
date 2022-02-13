//Hamburger 

// This is the code for the hamburger menu on small screens. The dropdown appears on click on the hamburger (invoking the OpenCloseNav function). Once shown I add the blocker div to complete the page and allow the user to click anywhere but the dropdown (including the X) to close it. 

const headerSmall = document.getElementById('header-small');
const menuLine = document.getElementsByClassName('menu-lines')[0];
const menuX = document.getElementsByClassName('menu-x')[0];
const menuTitle = document.getElementsByClassName('menu-title')[0];
const blocker = document.getElementsByClassName('blocker')[0];
const body = document.body;

function openCloseNav() {
  if (headerSmall.style.display === "block") {
    headerSmall.style.display = "none";
    menuLine.style.display = "block";
    menuX.style.display = 'none';
    menuTitle.style.display = 'block';
    blocker.style.display = 'none'
    body.style.overflow = 'auto';
} else {
    headerSmall.style.display = "block";
    menuLine.style.display = "none";
    menuX.style.display = 'block';
    menuTitle.style.display = 'none';
    blocker.style.display = 'block'
    body.style.overflow = 'hidden';
  }
}

//Function to make the small screen navbar disappear if the user changes to bigger screen even if it has been opened on the small one (for example if the user changes between portrait and landscape modes). It also checks if the hamburger has the lines or X and makes sure it is correctly displayed after resizing of the screen

var x = window.matchMedia("(max-width: 991px)")
removeNav(x)
x.addListener(removeNav)

function removeNav(x) {
  if (x.matches) {
    headerSmall.style.display = "none";
    menuLine.style.display = "block";
    menuX.style.display = 'none';
    menuTitle.style.display = 'block';
} else {
    headerSmall.style.display = "none";
    blocker.style.display = "none";
    body.style.overflow = 'auto';
}
}


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
    event.preventDefault()

  } else {
    sizeModal.style.display = 'block'
    event.preventDefault()

  }
}




//Magnifying glass

$(document).ready(function() {
  $('.magnified-image').magnify();
});

$(document).ready(function() {
  $('.magnified-image').magnify({
    speed: 400
    });
});


//form

function alertFunction() {
  document.getElementById('input-email').value = ''
  alert('Congrats! You have signed up for our newsletter')
}

