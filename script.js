// tootltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// navbar function
function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var footer = document.getElementById("footer");

  if (document.body.scrollTop > (window.innerHeight / 2) || document.documentElement.scrollTop > (window.innerHeight / 2)) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }

  if (footer.offsetTop <= (window.innerHeight + window.pageYOffset)) {
    navbar.classList.remove("active");
  }
}

// scroll function
function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 250;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('revealup');
    }
    else {
      reveals[i].classList.remove('revealup');
    }
  }
}

// Attach scroll and highlightActiveTab functions to window.onscroll
window.onscroll = function () {
  scrollFunction();
  reveal();
};
