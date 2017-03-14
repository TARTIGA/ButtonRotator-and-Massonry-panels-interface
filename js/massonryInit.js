 $(function() {
     //ScreenWidth
     var screenWidth = $(window).width();
     //Screen state 
     var screenSmall = screenWidth < 800 ? true : false;
     //Masonry Container
     var $container = $('.masonry');
     // Chech screen size
     if (screenSmall) {
         reInitMas(0, 10);
     } else reInitMas(200, 0);

     // Handler then window resized
     $(window).resize(function() {
         var screenWidth = $(window).width();
         if (screenWidth < 800 && !screenSmall) {
             reInitMas(0, 10);
             screenSmall = !screenSmall;

         } else if (screenWidth >= 800 && screenSmall)
             reInitMas(200, 0);
         screenSmall = !screenSmall;

     });


     /**
      * ReInit Masonry object
      * 
      * @param {any} colimnW 
      * @param {any} gut 
      */
     function reInitMas(colimnW, gut) {
         console.log("width = " + $(window).width());
         $container.masonry({
             columnWidth: colimnW,
             gutter: gut,
             itemSelector: '.item'
         });
     }
 });