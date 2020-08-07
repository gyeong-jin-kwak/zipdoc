$(document).ready(function(){
  var width = $(window).width();

  $(window).on('resize', function() {
    if ($(this).width() !== width) {
      this.location.href = this.location.href;
    }
  });

  mobile_swipe();

  new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

function mobile_swipe(){
  var windowWidth = $( window ).width();
  var wrapper = $('.content-point');
  var list = $('.point-list');
  var items = $('.point-item');

  if(windowWidth < 416) {
    // console.log('mobile screen')
    $(wrapper).addClass('swiper-container');
    $(list).addClass('swiper-wrapper');
    $(items).addClass('swiper-slide');
  } else {
    // console.log('pc screen')
    $(wrapper).removeClass('swiper-container');
    $(list).removeClass('swiper-wrapper');
    $(items).removeClass('swiper-slide');
  }
}
  