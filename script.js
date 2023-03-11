let text = document.querySelector('.banner h2');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginBottom = value * 2 + 'px';
})

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



// scroll fadein effect
$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $('.hideme').each(function (i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ 'opacity': '1' }, 1500);
      }
    });
  });
});
