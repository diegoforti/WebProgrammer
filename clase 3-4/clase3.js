 
/******** Ejercicios ************/


//Ejercicio 1
    
// var firstName = prompt('Ingrese su nombre')
// var lastname = prompt('Ingese su aplellido')

// showNames(firstName, lastname)

function showNames(firstName, lastname) {
    alert('Buenas tardes ' + firstName.charAt(0).toUpperCase() + firstName.slice(1) 
    + ' ' 
    + lastname.charAt(0).toUpperCase() + lastname.slice(1))
    
    console.log(firstName + ' ' + lastname)
}


//Ejercicio 2

// for (var index = 0; index < 3; index++) {
    // var dayOfTheWeek = prompt('Ingrese un dia de la semana')
    // showDay(dayOfTheWeek)
// }

function showDay(dayOfTheWeek) {
    var listDays = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
    
    for (var index = 0; index < listDays.length; index++) {
        var day = listDays[index];
        if (day === dayOfTheWeek.toUpperCase()) {

            switch (day) {
                case 'SABADO':
                case 'DOMINGO':
                    alert('Es fin de semana!!!')
                    break;                    
            
                default:
                    return alert('Es dia de la semana') 
                    break;
            }
        }
    }

    return alert('No existe ese dia.... :(')
    
}


//Ejercicio 3

// var value = prompt('Ingrese una palabra')
// validaLength(value)

function validaLength(value) {
    
    if (isNaN(parseInt(value))) {        
        (((value.length) > 5) ?  alert(true) : alert(false))
    }else{
        alert('Solo palabras!!!')
        var value = prompt('Ingrese una palabra')
        validaLength(value)
    }

    
}


/******** Trabajo Practico - Calculadora mejorada************/
var inputOpera
var operationList = ['+', '-', '*', '/', 'SUM', 'RES', 'MUL', 'DIV']
var validOpera = false
while (!validOpera) {
    inputOpera = prompt('Ingrese una operacion aritmetica, Ej: + - * / Sum Res Mul Div.', 'Sum')
    inputOpera = inputOpera.toUpperCase()
    
    for (var index = 0; index < operationList.length; index++) {
        var operation = operationList[index];
        if (operation === inputOpera) {
            validOpera = true
            break
        }else{
            validOpera = false
        }
    }
    
}

var inputFirstNumber = prompt('Ingrese el primer numero.')
inputFirstNumber = parseInt(inputFirstNumber)
while (isNaN(inputFirstNumber)) {
    alert('No es un numero')
    inputFirstNumber = prompt('Vuelva a ingresar el primer numero.')
}

var inputSecondNumber = prompt('Ingrese el segundo numero.')
inputSecondNumber = parseInt(inputSecondNumber)
while (isNaN(inputSecondNumber) || inputSecondNumber === 0) {
    (inputSecondNumber === 0)?alert('No se puede dividir por 0'):alert('No es un numero')
    inputSecondNumber = prompt('Vuelva a ingresar el segundo numero.')
}

switch (inputOpera) {
    case '+':
    case 'SUM':
        alert('El resultado es: ' + (inputFirstNumber + inputSecondNumber))
        break;
    
    case '-':
    case 'RES':
        alert('El resultado es: ' + (inputFirstNumber - inputSecondNumber))
        break;

    case '*':
    case 'MUL':
        alert('El resultado es: ' + (inputFirstNumber * inputSecondNumber))
        break;    
    case '*':
    case 'DIV':
        alert('El resultado es: ' + (inputFirstNumber / inputSecondNumber))
        break;    
    
    default:
        break;
}

/******** FIN - Trabajo Practico - Calculadora mejorada************/