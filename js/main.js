
// Preloader
$(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});

// Mobile Nav
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//sticky navbar
$(window).scroll(function () { 

  let position = $(this).scrollTop();

  if(position>= 718){
     $('.navbar').addClass('nav-anim');
     $('.navbar').addClass('fixed-top');
  }
  else{
    $('.navbar').removeClass('nav-anim');
     $('.navbar').removeClass('fixed-top');
  }
   
 });

 //smooth scroll
 $(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
 
//Skills Bar
$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});

// Porfolio  filter
$(document).ready(function() {
  
var portfolioIsotope = $('.portfolio-grid').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});

$('#portfolio-flters li').on('click', function () {
  $("#portfolio-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');

  portfolioIsotope.isotope({filter: $(this).data('filter')});
 });

 // Portfolio information OWL carousel
 $(".project-info-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});

 //Counters
 $('.counter').each(function () {
  $(this).prop('Counter',0).animate({
  Counter: $(this).text()
  }, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
  $(this).text(Math.ceil(now));
  }
  });
  });
});


//Form Validation
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// AOS animation
function aos_init() {
  AOS.init({
    duration: 1000,
    once: true
  });
}
$(window).on('load', function() {
  aos_init();
});

//Back to top button

$(function () {
  $(window).scroll(function() {
      if ($(this).scrollTop() - 200 > 0) {
          $('#to-top').stop().slideDown('fast'); // show the button
      } else {
          $('#to-top').stop().slideUp('fast'); // hide the button
      }
  });
});

$(function () {
//on click action
  $("#to-top").on("click", function () {
      $("html, body").animate({
          scrollTop: 0
      }, 200);
  });
});



