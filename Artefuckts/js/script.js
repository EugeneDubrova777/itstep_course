$(document).ready(function(){
  let options = {
    items: 4,
    margin: 30,
    dots: false,
  }
  // $(".owl-carousel").owlCarousel(options);
  let owl = $(".owl-carousel");
  owl.owlCarousel(options);
  
  $('#slider-left').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('#slider-right').click(function() {
    owl.trigger('next.owl.carousel');
  });
});

