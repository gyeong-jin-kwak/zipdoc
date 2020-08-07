$(document).ready(function(){
  var width = $(window).width();

  $(window).on('resize', function() {
    if ($(this).width() != width) {
      // this.location.href = this.location.href;
      document.location.reload();
    }
  });

  mobile_swipe();

  new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  menu_slide();
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

function menu_slide(){
  var menu_btn = $('.menu-btn');
  var close_btn = $('.board-close-btn');
  var menu_panel = $('.mobile-panel');
  var menu_board = $('.panel-board');

  $(menu_btn).click(function(){
    $(menu_panel).css('display', 'block');
    $(menu_board).animate({'right':'0'}, 300);
  });

  $(close_btn).click(function(){
    $(menu_board).animate({'right':'-300px'}, 300);
    $(menu_panel).css('display', 'none');
  });
}