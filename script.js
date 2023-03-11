
// tootltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// navbar
window.onscroll = function() {scrollFunction()};
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


$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $('.hideme').each(function (i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var top_of_object = $(this).position().top;
      var top_of_window = $(window).scrollTop();

      /* If the top of the object is visible in the window, fade it in */
      if (top_of_window + ($(window).height() / 2) > top_of_object) {
        $(this).animate({ 'opacity': '1' }, 1500 * (i + 1));
      }
    });
  });
});

