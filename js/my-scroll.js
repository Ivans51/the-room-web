jQuery(document).ready(function () {
  jQuery("a.scrollLink").click(function (event) {
    const linkHref = jQuery(this).attr("href")
    const idElement = linkHref.substr(linkHref.indexOf("#"))
    jQuery('html, body').animate({
      scrollTop: jQuery(idElement).offset().top
    }, 1000);
    return false;
  });
});
