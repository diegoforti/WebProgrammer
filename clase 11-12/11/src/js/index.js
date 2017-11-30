$('#password').blur(function (e) { 
    validatePass(e.target.id)
    
});

$('#email').blur(function (e) { 
    validateEmail(e.target.id)
    
});

$('#loginButton').click(function (e) { 
    e.preventDefault()
    
    validateEmail('email')
    validatePass('password')
    
});

function validateEmail(idElement) {
    var cont = $('#' + idElement).val();   
    clearError(idElement, 'errorDivEmail') 

    if (cont.length === 0 ) {
        createError(idElement, 'errorDivEmail', 'El email es un campo obligatorio')  

    }else{                
        var arroba = cont.indexOf('@') !== -1
        var punto = cont.indexOf('.') !== -1
    
        if (!arroba || !punto) {
            createError(idElement, 'errorDivEmail', 'El email es incorrecto. Ej: tu_correo@gmail.com')             
        }        
    }
}

function validatePass(idElement) {    
    var cont = $('#' + idElement).val();
    clearError(idElement, 'errorDivPass')
        
    if (cont.length === 0)  {   
        createError(idElement, 'errorDivPass', 'Password Requerida')  
        
    }else if (cont.length < 6) {
        createError(idElement, 'errorDivPass', 'Password menor de 6 caracteres')    
        
    }
}

function clearError(idElement, idErrorDiv){
    $('#' + idErrorDiv).remove();
    $('#' + idElement).parent( "div" ).removeClass('has-danger')
    $('#' + idElement).removeClass('form-control-danger')
}

function createError(idElement, idErrorDiv, errorText){
    $('#' + idElement).parent( "div" ).addClass('has-danger')
    $('#' + idElement).addClass('form-control-danger')
    $('#' + idElement).parent( "div" ).append( "<div id='" + idErrorDiv + "' class='form-control-feedback'></div>" )
    $('#' + idErrorDiv).text(errorText);  
}



 