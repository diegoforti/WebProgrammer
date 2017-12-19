
$(document).ready(function () {
    console.log('Clase 13')

    $('#addEmailButton').click(function (e) { 
        e.preventDefault();

        validateEmail('email')

    });


    function validateEmail(idElement) {
        var cont = $('#' + idElement).val();   

        if (cont.length === 0 ) {

            $('#errorTitle').append('El email es un campo obligatorio   ');
            $('#errorDialog').fadeIn();

        }else{                
            var arroba = cont.indexOf('@') !== -1
            var punto = cont.indexOf('.') !== -1
        
            if (!arroba || !punto) {

                $('#errorTitle').append('El email es incorrecto. Ej: tu_correo@gmail.com');      
                $('#errorDialog').fadeIn();

            }        
        }
    }



    $('#okErrorButton').click(function (e) { 
        e.preventDefault();

        $('#errorDialog').fadeOut(function() {
            $('#errorTitle').empty();        
        })
        
    })

})