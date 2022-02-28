$(function(){
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');
      $('.header__menu--sp').toggleClass('active');      
      return false;
    });
  });