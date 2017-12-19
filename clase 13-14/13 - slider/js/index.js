console.log('Clase 13')


$(document).ready(function () {
   index = 1
   totalImagenes = 3
    
    $('body').keydown(function(e){

        // <--
        if ((e.keyCode || e.which) == 37){   

            if (index > 1) {
                $( ".imageFrame" ).fadeOut( 1200, function () {
                    $('#photo' + index).fadeIn(1200);
    
                });
               index--                
            }
        }
        
        // -->
        if ((e.keyCode || e.which) == 39){

            if (index < totalImagenes) {
                $( ".imageFrame" ).fadeOut( 1200, function () {
                    $('#photo' + index).fadeIn(1200);
    
                });
               index++                
            }
            
        }   
    });

});
