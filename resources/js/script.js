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
        if (icon.hasClass('ion-android-menu')) {
            icon.addClass('ion-android-close');
            icon.removeClass('ion-android-menu');
        } else {
            icon.addClass('ion-android-menu');
            icon.removeClass('ion-android-close');
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
                //console.log(item.src);
              if(item.src.includes("youtube")){
                  item.type = 'iframe';
              }
              //console.log(item); // Do whatever you want with "item" object
            }
          },
         midClick: true,
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by MTC School</small>';
			}
		}
	});
    
    /*  Sending email */
    
    $('#btnSubmit').on('click', function(event) {
        event.preventDefault();
        const mailFrom = $('#email').val();
        const mailTo = 'alamnr@gmail.com';
            const name = $('#name').val();
            const howFindUs = $('#find-us').val(); 
            const message = $('#message').val();
            const newsLetter = $('#news').val();
            //console.log( mailFrom + "   " + name + "  " + howFindUs  +  "  "  +  message +  " " + newsLetter);
            const subject = "Guardian's Opinion";
            const body = `Hi, \r\n
                            It's me ${name}. Here is my message for you - ${message} \r\n

                            Thanking You \r\n
                            Name: ${name} , Email: ${mailFrom} ,\r\n
                            How find : ${howFindUs}, NewsLetter : ${newsLetter} `;
            window.open(`mailto:${mailTo}?subject=${subject}&body=` + encodeURIComponent(body));
			
    });
    
    /* Multi lingual */
    i18next.changeLanguage($('#lang').val());
    $('#lang').on('change',function(){
        //console.log($('#lang').val());
        i18next.changeLanguage($('#lang').val());
    })
    
   
    
});