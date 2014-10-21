/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	// jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(100).fadeOut("normal");
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

/* =================================
===  MAILCHIMP                 ====
=================================== */


/* =================================
===  STICKY NAV                 ====
=================================== */


/* NAVIGATION VISIBLE ON SCROLL */




/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */

/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura); 
  
}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */


/* =================================
===  WOW ANIMATION             ====
=================================== */


/* =================================
===  OWL CROUSEL               ====
=================================== */


/* =================================
===  Nivo Lightbox              ====
=================================== */


/* =================================
===  SUBSCRIPTION FORM          ====
=================================== */





/* =================================
===  CONTACT FORM          ====
=================================== */





/* =================================
===  EXPAND COLLAPSE            ====
=================================== */




/* =================================
===  STELLAR                    ====
=================================== */


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}