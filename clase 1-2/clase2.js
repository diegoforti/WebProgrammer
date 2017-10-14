days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

//Ejercicios

// for (var index = 0; index < days.length; index++) {
//     var element = days[index];
    
//     switch (element) {
//         case 'Sabado':
//             console.log('Es Sabado!!!!')
//             break;
//         case 'Domingo':
//             console.log('Es Domingo!!!!')
//             break;
            
//         default:
//            break;
//     }
    
// }


//Trabajo Practico

var inputDay = prompt('Ingrese un día de la semana', 'Lunes')
var isDay = false
for (var index = 0; index < days.length; index++) {
    var element = days[index];

    if (inputDay.toUpperCase === element.toUpperCase) {
        isDay= true
    }
    
}

if (isDay) {
    switch (element) {
        case 'SABADO':
        case 'DOMINGO':
            alert('Es Finde!!!!')
            break;
        
        default:
            alert('Es día habil....')
            break;
    }            
}else{
    alert('No existe el día de la semana.')
}



