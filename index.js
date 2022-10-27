var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarr").style.top = "0";
  } else {
    document.getElementById("navbarr").style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
}
