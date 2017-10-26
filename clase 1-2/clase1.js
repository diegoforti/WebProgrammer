// var number = 3

// name = prompt('¿Cuál es tu nombre?')
// alert('Gracias ' + name)

// age = prompt('¿Que edad tienes ' + name + '?')
// alert('Dentro de 3 años tendrás '  + (parseInt(age) + number)) 

// alert('Hace 3 años tenias '  + (parseInt(age) - number))

// number1 = prompt('Ingresa el primer número para una suma sencilla')
// if (isNaN(parseInt(number1)))
//     alert('No es un numero.....')

// number2 = prompt('Ahora el segundo')    
// if (isNaN(parseInt(number2))) 
//     alert('No es un numero.....')
    
// if (isNaN(parseInt(number1)) || isNaN(parseInt(number2))) {
//     alert('No se puede realizar la suma si ambos no son de tipo number');
// }else{
//     alert('La suma es...... '  + (parseInt(number1) + parseInt(number2)))
// }

//------------Trabajo Practico - Calculadora -------------

var number1 = prompt('Ingresa el primer número...')
if (isNaN(parseInt(number1)))
    alert('No es un numero.....')

var operation =  prompt('Que operación desea realizar + - * /')

var number2 = prompt('Ahora el segundo')
if (isNaN(parseInt(number2))) 
    alert('No es un numero.....')

var result = 0
if (operation === '+') {
    result = parseInt(number1) + parseInt(number2)
    
}else if (operation === '-') {
    result = parseInt(number1) - parseInt(number2)
    
}else if(operation === '*'){
    result = parseInt(number1) * parseInt(number2)

}else if(operation === '/'){
    result = parseInt(number1) / parseInt(number2)

}

alert('Resultado: ' + parseInt(number1) + ' ' 
    + operation + ' ' 
    + parseInt(number2) + ' = ' 
    + result)