jQuery(document).ready(function ($) {
    $('.toggle-menu').click(function(){
        $('.navbar').toggleClass('menu-open');
    });
    $('.logo').click(function(){
        document.location = 'foreyes.html';
    });

   

    var middlecontent = "";
    $('.middle-content').html(middlecontent);

  /*  setTimeout(function(){
        $('.logo').addClass('animate');
    },2000);*/
});

