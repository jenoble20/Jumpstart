$(document).ready(function(){
  $(".carousel").slick({
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $(window).scroll(function(){
    var scrollDist = $(this).scrollTop();
    var navHeight = $(".navbar").height();
    //console.log(scrollDist);
    if(scrollDist > 300){
      $(".navbar").stop();
      $(".navbar").animate({top: -navHeight},150);
    }
    console.log(scrollDist);
    if(scrollDist < 100){
      $(".navbar").stop();
      $(".navbar").animate({top: 0}, 150);
    }
  });

});
