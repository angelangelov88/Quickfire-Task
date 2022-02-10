//This is the function I used to make the navbar sticky. It allows the user to see the navbar even if not on top of the page. I have styled it differently so it looks nice.
window.onscroll = function() {myFunction()};

var header = document.querySelector("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}



