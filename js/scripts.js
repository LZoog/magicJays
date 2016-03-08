
//Initialize wow scroll-to animations
new WOW().init();

//Smooth scrolling for anchor links (I did not write this)
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

//Gallery carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    lazyLoad: true,
    navigation: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
//Featherlight gallery initalization + adding a caption
  $('.item').featherlightGallery({
    filter: "a",
    afterContent: function() {
        this.$legend = this.$legend || $('<div id="legend"/>').insertAfter(this.$content);
        this.$legend.text(this.$currentTarget.attr('alt'));
    }
  });
});

//Nav toggle
$('#menu, #links a').click(function() {
   $('#links').toggle();
})
