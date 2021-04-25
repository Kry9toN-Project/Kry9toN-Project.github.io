jQuery(document).ready(function($) {

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
          scrollTop: target.offset().top -70
        }, 1000, 'easeInOutExpo');
      }
    }
  });

// Initial wow
new WOW().init();
  
  // Theme switch
	var themeSwitch = document.getElementById('themeSwitch');
	if(themeSwitch) {
		initTheme(); // if user has already selected a specific theme -> apply it
		themeSwitch.addEventListener('change', function(event){
    	resetTheme(); // update color theme
    });

    function initTheme() {
    	var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    	// update checkbox
    	themeSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			if (darkThemeSelected) {
			  document.getElementById("nav").classList.toggle('navbar-dark');
		  	document.body.setAttribute('data-theme', 'dark');
		  	document.getElementById("icons").classList.toggle('fa-moon')
		  	document.getElementById("brand").src="/assets/img/icon-dark.png";
			} else {
			  document.getElementById("nav").classList.toggle('navbar-light');
		  	document.body.removeAttribute('data-theme');
		  	document.getElementById("icons").classList.toggle('fa-sun');
		  	document.getElementById("brand").src="/assets/img/icon.png";
			}
    };

    function resetTheme() {
    	if(themeSwitch.checked) { // dark theme has been selected
    		document.body.setAttribute('data-theme', 'dark');
               // Change logo
                document.getElementById("brand").src="/assets/img/icon-dark.png";
    		localStorage.setItem('themeSwitch', 'dark');
    	} else {
    		document.body.removeAttribute('data-theme');
    		document.getElementById("brand").src="/assets/img/icon.png";
    		localStorage.removeItem('themeSwitch');
    	}
    	 	// Change colot Navbar
    		if ( document.getElementById("nav").classList.contains('navbar-light')) {
          document.getElementById("nav").classList.toggle('navbar-dark');
          document.getElementById("nav").classList.remove("navbar-light");
          console.log('dark');
    		} else {
    		  document.getElementById("nav").classList.toggle('navbar-light');
    		  document.getElementById("nav").classList.remove("navbar-dark");
    		  console.log('light');
    		}
        // Change icon
        if ( document.getElementById("icons").classList.contains('fa-moon')) {
          document.getElementById("icons").classList.toggle('fa-sun');
          document.getElementById("icons").classList.remove('fa-moon');
          console.log('light icon');
        } else {
          document.getElementById("icons").classList.toggle('fa-moon');
          document.getElementById("icons").classList.remove('fa-sun');
          console.log('dark icon');
        }
    };
	}
	
	// Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  }

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel();
  });
 
});