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