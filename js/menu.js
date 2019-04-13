// create smartbutton
jQuery('nav').before('<div id="smartbutton"></div>');
jQuery('#smartbutton').append('<div class="buttonline"></div>');
jQuery('#smartbutton').append('<div class="buttonline"></div>');
jQuery('#smartbutton').append('<div class="buttonline"></div>');

// add click listener
jQuery('#smartbutton').click(function(event)
{
  jQuery('nav').animate({height:'toggle'},200);
});
