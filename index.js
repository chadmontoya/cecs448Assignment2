const imgPanels = document.querySelectorAll('.img-panel'); // Get all image panels

imgPanels.forEach((imgPanel) => { // Iterate through all image panels
  imgPanel.addEventListener('click', () => { // Put click event listener on each one
    removeActive(); // Call helper function to remove all active classes from each image panel
    imgPanel.classList.add('active'); // When an image panel is clicked, add the active class to it
  });
});

function removeActive() {
  imgPanels.forEach(imgPanel => { // Iterate through all image panels
      imgPanel.classList.remove('active'); // Remove the active class from each image panel
  });
}

$(document).ready(function() {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function() {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).on('click', '.mobile-nav-toggle', function(e) {
  $('body').toggleClass('mobile-nav-active');
  $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
});

$(document).click(function(e) {
  var container = $(".mobile-nav-toggle");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ($('body').hasClass('mobile-nav-active')) {
      $('body').removeClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    }
  }
});