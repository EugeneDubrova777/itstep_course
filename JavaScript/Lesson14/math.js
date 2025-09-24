$(window).on('load', function() {
  console.log('game over');
});


$(document).ready(function() {
  $('.block').html('<h1>Hello fckn jQuery</h1>').css({
    width: '500px',
    height: '200px',
    color: 'yellow',
    backgroundColor: '#ea1234',
    textAlign: 'center',
  });
  
  
  $('#hide').click(function() {
    $('.block').slideToggle(1000, () => {
      if($(this).html() == 'Hide Block') {
        $(this).html('Open Block');
      } else {
        $(this).html('Hide Block');
      }
    });
  });
  
  let a = $('<a href="https://google.com" target="_blank"></a>');
  a.text('Link');
  $('body').append(a);
  // a.remove();
});