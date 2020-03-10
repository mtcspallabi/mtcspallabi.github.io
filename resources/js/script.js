$(document).ready(function() {
  /*  Scroll on buttons */

  $(".js--scroll-to-plans").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".js--section-plan").offset().top },
      1000
    );
  });

  $(".js--scroll-to-testimonials").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".js--section-testimonials").offset().top - 80 },
      1000
    );
  });

  $(".js--scroll-to-feature").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top - 50 },
      1000
    );
  });

  $(".js--scroll-to-location").on("click", function(event) {
    event.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".js--section-location").offset().top },
      1000
    );
  });

  /* Navigation scroll */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();

          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /*  Animations on scroll */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  /*
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'   
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInDown');
    },{
        offset: '50%'   
    }); */

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated fadeInDown");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-5").waypoint(
    function(direction) {
      $(".js--wp-5").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-6").waypoint(
    function(direction) {
      $(".js--wp-6").addClass("animated fadeInDown");
    },
    {
      offset: "50%"
    }
  );

  /* Sticky Nav */
  $(".js--section-features").waypoint(
    function(direction) {
      var icon = $(".js--nav-icon i");
      if (direction == "down") {
        $("nav").addClass("sticky");
        $("nav").css("background-color", "rgba(255, 255, 255, 0.98)");
        icon.css("color", "#555");
      } else {
        $("nav").removeClass("sticky");
        if (icon.hasClass("ion-android-menu")) {
          $("nav").css("background-color", "transparent");
          $("nav").css("-webkit-box-shadow", "");
          $("nav").css("box-shadow", "");
          icon.css("color", "#fff");
        } else {
          icon.css("color", "#555");
        }
      }
    },
    {
      offset: "60px;"
    }
  );

  /* Window resize */

  $(window).on("resize", function() {
    var width = $(window).width();
    if (width > 767) {
      if (!$("nav").hasClass("sticky")) {
        $("nav").css("background-color", "transparent");
        $("nav").css("-webkit-box-shadow", "");
        $("nav").css("box-shadow", "");
        $(".main-nav").css("display", "block");
        //console.log("width -" + width);
      } else {
        $(".main-nav").css("display", "block");
      }
    } else {
      $(".main-nav").css("display", "none");
    }
  });

  /* Mobile Nav */

  $(".js--nav-icon").on("click", function(event) {
    event.preventDefault();
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    var rootNav = $("nav");
    nav.slideToggle(200);
    if (icon.hasClass("ion-android-menu")) {
      icon.addClass("ion-android-close");
      icon.removeClass("ion-android-menu");
      if (!rootNav.hasClass("sticky")) {
        rootNav.css("background-color", "rgba(255, 255, 255, 0.98)");
        rootNav.css("-webkit-box-shadow", "0 2px 2px #efefef");
        rootNav.css("box-shadow", "0 2px 2px #efefef");
        icon.css("color", "#555");
      }
    } else {
      icon.addClass("ion-android-menu");
      icon.removeClass("ion-android-close");
      if (!rootNav.hasClass("sticky")) {
        rootNav.css("background-color", "transparent");
        rootNav.css("-webkit-box-shadow", "");
        rootNav.css("box-shadow", "");
        icon.css("color", "#fff");
      }
    }
  });

  /* Maps */

  var map = new GMaps({
    div: ".map",
    lat: 23.8244409,
    lng: 90.3633894,
    zoom: 16
  });

  map.addMarker({
    lat: 23.8244409,
    lng: 90.3633894,
    title: "Mother Teresa Catholic School",
    infoWindow: {
      content: "<p>Moether Teresa Catholic School Campus</p>"
    }
  });

  /*  Sending email */

  /*
    $('#btnSubmit').on('click', function(event) {
        event.preventDefault();
        const mailFrom = $('#email').val();
        const mailTo = 'alamnr@gmail.com';
            const name = $('#name').val();
            const howFindUs = $('#find-us').val(); 
            const message = $('#message').val();
            const newsLetter = $('#news').val();
            console.log( mailFrom + "   " + name + "  " + howFindUs  +  "  "  +  message +  " " + newsLetter);
            const subject = "Guardian's Opinion";
            const body = `Hi, \r\n
                            It's me ${name}. Here is my message for you - ${message} \r\n

                            Thanking You \r\n
                            Name: ${name} , Email: ${mailFrom} ,\r\n
                            How find : ${howFindUs}, NewsLetter : ${newsLetter} `;
            window.open(`mailto:${mailTo}?subject=${subject}&body=` + encodeURIComponent(body));
			
    }); */

  /* Multi lingual */
  i18next.changeLanguage($("#lang").val());
  $("#lang").on("change", function() {
    //console.log($('#lang').val());
    i18next.changeLanguage($("#lang").val());
  });

  /*Scroll to top when arrow up clicked BEGIN*/
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
      $("#back2Top").fadeIn();
    } else {
      $("#back2Top").fadeOut();
    }
  });
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  /*Scroll to top when arrow up clicked END*/
});
