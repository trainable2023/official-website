window.onscroll = function() {myFunction()};

var header = document.querySelector('.site-header');
var sticky = header.offsetTop;
let bottomHeader = document.querySelector('.bottom-header.header-image-wrap');
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
    bottomHeader.classList.add("fixed-header");
     
  } else {
    header.classList.remove("sticky-header");
    bottomHeader.classList.remove("fixed-header");
  }
}