$(document).ready(function(){
  $(".carousel").slick({
    accessibility: false,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $(window).scroll(function(){
    var scrollDist = $(this).scrollTop();
    //console.log(scrollDist);
    if(scrollDist > 200){
      var max = -74;
      var navHeight = $(".navbar").height();
      var navbar = $(".navbar");
    }
    if(scrollDist === 0){
      $(navbar).animate({top: navHeight},150);
    }
  });

});
