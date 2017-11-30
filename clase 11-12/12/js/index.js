console.log('Clase 12 - Mini Workshop')

$(document).ready(function () {

     //Carga inicial en el localStorage
     ListStudents.load()
     
    $('#addFirstNameButton').click(function (e) { 
        if ($('#addFirstName').val().length === 0){
            console.log('Ingrese un nombre y apellido válido.')
            return  
        }
       
        ListStudents.add($('#addFirstName').val())
    })

    $('#mainList li').click(function (e) {        
        ListStudents.delete(e.target.id)
    }) 

})
