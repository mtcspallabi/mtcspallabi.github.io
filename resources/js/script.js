$(document).ready(function(){
   
    /* Sticky Nav */
   $('.js--section-features').waypoint(function(direction){
       if (direction == "down") {
           $('nav').addClass('sticky');
       }
       else {
           $('nav').removeClass('sticky');
       }
   }, {
       offset: '60px;'
   });
    
    /*  Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.js--section-plan').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top}, 1000);
    });
    
    $('.js--scroll-to-location').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('.js--section-location').offset().top}, 1000);
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
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /*  Animations on scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'   
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    },{
        offset: '50%'   
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInDown');
    },{
        offset: '50%'   
    });
    
    /* Mobile Nav */
    
    $('.js--nav-icon').on('click', function(event) {
        event.preventDefault();
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i'); 
        nav.slideToggle(200);
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    });
    
    /* Maps */
    
    var map = new GMaps({
        div: '.map',
        lat: 23.8244409,
        lng: 90.3633894,
        zoom: 16
    });
    
    map.addMarker({
        lat: 23.8244409,
        lng: 90.3633894,
       title:'Mother Teresa Catholic School' ,
        infoWindow:{
            content:'<p>Moether Teresa Catholic School Campus</p>'
        }
    });
    
    /* Image popup  gallery  by magnific pop */
    
    $('.gallery-photo').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
        callbacks: {
            elementParse: function(item) {
              // Function will fire for each target element
              // "item.el" is a target DOM element (if present)
              // "item.src" is a source that you may modify
              if(item.src.includes("youtube")){
                  this.type = 'iframe';
              }
              console.log(item); // Do whatever you want with "item" object
            }
          },
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by MTC School</small>';
			}
		}
	});
    
    
    
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});  
    
    /*
    
    $('.section-gallery').magnificPopup({
    items: [
      {
        src: 'resources/img/gallery-1.jpg',
        title: 'School Coridor'
      },
      {
        src: 'resources/img/gallery-2.jpg',
        title: 'Sisimpur Gift Book'
      },
      {
        src: 'resources/img/mtcs-1.jpg',
        title: 'Our Campus'
      },
      {
        src: 'https://www.youtube.com/watch?v=tdSB8Zyzz7s',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'resources/img/gallery-7.jpg',
        title: 'Annual Sports Ceremony'
      },
      {
        src: 'resources/img/gallery-6.jpg',
        title: 'Annual Sports Ceremony'
      },
      {
        src: 'resources/img/gallery-8.jpg',
        title: 'Annual Closing Ceremony'
      },
      {
         src: 'resources/img/gallery-7.jpg',
        title: 'Annual Sports Ceremony'
      }     
      
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
}); */
    
});