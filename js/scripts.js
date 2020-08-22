/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
    function defer(method) {
  if (window.jQuery)
    method();
  else
    setTimeout(function() {
      defer(method)
    }, 50);
}
defer(function() {
  (function($) {
    
    function doneResizing() {
      var totalScroll = $('.logo-slider-frame').scrollLeft();
      var itemWidth = $('.logo-slider-item').width();
      var difference = totalScroll % itemWidth;
      if ( difference !== 0 ) {
        $('.logo-slider-frame').animate({
          scrollLeft: '-=' + difference
        }, 500, function() {
          // check arrows
          checkArrows();
        });
      }
    }
    
    function checkArrows() {
      var totalWidth = $('#logo-slider .logo-slider-item').length * $('.logo-slider-item').width();
      var frameWidth = $('.logo-slider-frame').width();
      var itemWidth = $('.logo-slider-item').width();
      var totalScroll = $('.logo-slider-frame').scrollLeft();
      
      if ( ((totalWidth - frameWidth) - totalScroll) < itemWidth ) {
        $(".next").css("visibility", "hidden");
      }
      else {
        $(".next").css("visibility", "visible");
      }
      if ( totalScroll < itemWidth ) {
        $(".prev").css("visibility", "hidden");
      }
      else {
        $(".prev").css("visibility", "visible");
      }
    }
    
    $('.arrow').on('click', function() {
      var $this = $(this),
        width = $('.logo-slider-item').width(),
        speed = 500;
      if ($this.hasClass('prev')) {
        $('.logo-slider-frame').animate({
          scrollLeft: '-=' + width
        }, speed, function() {
          // check arrows
          checkArrows();
        });
      } else if ($this.hasClass('next')) {
        $('.logo-slider-frame').animate({
          scrollLeft: '+=' + width
        }, speed, function() {
          // check arrows
          checkArrows();
        });
      }
    }); // end on arrow click
    
    $(window).on("load resize", function() {
      checkArrows();
      $('#logo-slider .logo-slider-item').each(function(i) {
        var $this = $(this),
          left = $this.width() * i;
        $this.css({
          left: left
        })
      }); // end each
    }); // end window resize/load
    
    var resizeId;
    $(window).resize(function() {
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 500);
    });
    
  })(jQuery); // end function
});
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  