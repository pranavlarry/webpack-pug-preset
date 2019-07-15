console.log('Demo!');

$(".menu").click(function(){
  $(".nav").toggleClass("open");
});

$(window).scroll(function(e){
    parallax();
  });

const $navbar = $(".nav"),y_pos = $navbar.offset().top,height = $navbar.height();

//scroll top 0 sticky
$(document).scroll(function() {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > 0) {
    $navbar.addClass("sticky");
  } else {
    $navbar.removeClass("sticky");
  }
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.hero').css('top',-(scrolled*0.0315)+'rem');
    $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
    $('.hero > h1').css('opacity',1-(scrolled*.00175));
  };