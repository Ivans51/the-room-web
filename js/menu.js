// create smartbutton
jQuery('nav').before('<div id="smartbutton"></div>');
const smartButton = jQuery('#smartbutton');
smartButton.append('<div class="buttonline"></div>');
smartButton.append('<div class="buttonline"></div>');
smartButton.append('<div class="buttonline"></div>');

function menuResponsive() {
  jQuery('nav').animate({height: 'toggle'}, 200);
}

// add click listener
smartButton.click(function (event) {
  menuResponsive()
});
