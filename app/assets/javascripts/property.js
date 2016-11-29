/*------ Side Nav-Bar -------*/

$(document).ready(function(){
  $(document).on('click', '.nav-btn', function(){
    if ( $('.side-nav').is(':visible') ) {
      $('.side-nav').css({
        display: 'none'
      })
      $(".main-container").css({
        width: '100%'
      })
    }else{
      $('.side-nav').css({
        display: 'block'
      })
      $(".main-container").removeAttr('style')
    }
  });
});
