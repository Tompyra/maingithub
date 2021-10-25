jQuery(document).ready(function ($) {
  $('.menu-btn').click(function(){
    
    $('.body').addClass('popup-open'); 
  });

  $('.boka-close, .popup-container').click(function(){
            
    $('.body').removeClass('popup-open');
   
});
});

