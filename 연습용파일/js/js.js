$(function(){
   
    // variable all elements
  
     var open  = $(".open"),
         popup = $(".popup"),
         main  = $(".main"),
         close = $(".close"),
         text  = $("h1"),
         para  = $("p");
  
  // open window when click on open button
  
     open.on('click', function(){
          main.fadeIn(1000);
          popup.css('transform', 'scale(1, 1.4)');
          popup.animate({width: '800px'}, 600, function(){
                close.delay(600).fadeIn();
                text.delay(700).fadeIn();
                para.delay(700).fadeIn();
             });
  });
  
  // close window when click on close button
  
     close.on('click', function(){
  
          popup.css('transform', 'scale(1, 1)');
          close.delay(100).fadeOut();
          text.delay(100).fadeOut();
          para.delay(100).fadeOut();
          popup.animate({width: '100px'}, 600);
          main.delay(1200).fadeOut();
  });
  
  // close window on click anywhere
   
   main.on('click', function(){
  
          popup.css('transform', 'scale(1, 1)');
          close.delay(100).fadeOut();
          text.delay(100).fadeOut();
          para.delay(100).fadeOut();
          popup.animate({width: '100px'}, 600);
          main.delay(1200).fadeOut();
  
  });
  
  });