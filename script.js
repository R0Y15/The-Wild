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
  var revealy = document.querySelectorAll('.revealY');
  var revealx = document.querySelectorAll('.revealX');
  var revealx_rev = document.querySelectorAll('.revealX-rev');

  // revealY
  for (var i = 0; i < revealy.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = revealy[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop < windowheight - revealpoint) {
      revealy[i].classList.add('revealY-active');
    }
    else {
      revealy[i].classList.remove('revealY-active');
    }
  }


  // revealX
  for (var i = 0; i < revealx.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = revealx[i].getBoundingClientRect().top;
    var revealpoint = 250;

    if (revealtop < windowheight - revealpoint) {
      revealx[i].classList.add('revealX-active');
    }
    else {
      revealx[i].classList.remove('revealX-active');
    }
  }

  // revealX-reverse
  for (var i = 0; i < revealx_rev.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = revealx_rev[i].getBoundingClientRect().top;
    var revealpoint = 250;

    if (revealtop < windowheight - revealpoint) {
      revealx_rev[i].classList.add('revealX-rev-active');
    }
    else {
      revealx_rev[i].classList.remove('revealX-rev-active');
    }
  }

}

// Attach scroll and body_reveal functions to window.onscroll
window.onscroll = function () {
  scrollFunction();
  reveal();
};
