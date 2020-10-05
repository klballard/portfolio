//Bootstrapped Navbar code
window.onscroll = function() {navScroll()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function navScroll() {
  if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
  } else {
navbar.classList.remove("sticky");
}
}

var $navBar = $('.navbar');

var navPos = $navBar.offset().top;

$(window).scroll(function() {

    var scrollPos = $(this).scrollTop();

    if (scrollPos >= navPos) {
        $navBar.addClass('fixed');
    } else {
        $navBar.removeClass('fixed');
    }

});

// Thinking of adding an event listener for 'onscroll' to certain #anchors to match up and improve the nav bar dynamically