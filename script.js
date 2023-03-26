
// tootltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// navbar
window.onscroll = function () {scrollFunction() };
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

//body
$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $('.hideme').each(function (i) {
      var top_of_object = $(this).position().top;
      var top_of_window = $(window).scrollTop();

      /* If the top of the object is visible in the window, add class to show it */
      if (top_of_window + ($(window).height() / 2) > top_of_object) {
        $(this).addClass('appear').css('transition-delay', i * 0.5 + 's');
      }
    });
  });
});