
// tootltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// navbar
// Scroll function
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

// Highlight active tab function
function highlightActiveTab() {
  // Get the current page URL
  var currentUrl = window.location.href;

  // Find the links in the navbar
  var navLinks = document.querySelectorAll('#navbar a');

  // Loop through the links and check if their href matches the current URL
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentUrl) {
      // Add the "active" class to the link if it matches the current URL
      navLinks[i].classList.add('active');
    } else {
      // Remove the "active" class from the link if it doesn't match the current URL
      navLinks[i].classList.remove('active');
    }
  }
}

// Scrollspy function
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

// Attach scroll and highlightActiveTab functions to window.onscroll
window.onscroll = function() {
  scrollFunction();
  highlightActiveTab();
};
