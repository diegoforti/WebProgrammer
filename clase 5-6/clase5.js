/****** Ejercicios ******/

var arrayAlumnos = ['juan', 'diego', 'pedro', 'maría']

var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

// Descomentar para la segunda parte del Ejercicio.
// var alumnoBuscar = prompt('Ingrese el alumno a buscar.')


// Crear una función que reciba como parámetro un nombre de un alumno y que devuelva el nombre sin 
// tilde y en mayúsculas

// Descomentar para la primer parte del Ejercicio.
//var name = prompt('Ingrese un nombre')
//alert('Nombre devuelto: ' + removeDiacritics(name))

function removeDiacritics(name) {
    
    if (typeof name === 'string') {
        if (parseInt(name)) {
            alert('No es una palabra válida')
        }else{
            name = name.toUpperCase()
            name = name.replace('Á', 'A')
            name = name.replace('É', 'E')
            name = name.replace('Í', 'I')
            name = name.replace('Ó', 'O')
            name = name.replace('Ú', 'U')
        }
    }else{
        console.error('No es una palabra válida')
    }
    
    return name
}

//Crear una función que me permita saber si un nombre de un alumno se encuentra en un array de alumnos, 
//en caso de encontrarlo devolver la posición del alumno en el array.

// Descomentar para la primer parte del Ejercicio.
// alert(searchStudent(alumnoBuscar, arrayAlumnos))

function searchStudent(studentName, studentList){
    
    if (typeof studentName === 'string') {
        if (parseInt(studentName)) {
            return false
        }
        
    }else{
        return false
    }
    
    if (!Array.isArray(studentList)) {
        return false    
    }
    
    var indice = studentList.indexOf(studentName)
    
    if (indice >= 0) {
        return indice
    }else{
        return false
    }
    
}

// Crear un función que permita encontrar un alumno en un array sin importar si el alumno tiene mayúsculas, 
// minúsculas o tilde, en caso de encontrarlo devolver la posición del alumno en el array.

function searchStudentPro (studentName, studentsList) {
    
    var studentNameConverted = removeDiacritics(studentName)
    var searchResult = searchStudent(studentNameConverted, studentsList)
    
    if (!isNaN(parseInt(searchResult))) {
        return searchResult
    }else{
        return false 
    }

}

// Descomentar para la segunda parte del Ejercicio.
// var searchResultFinal =  searchStudentPro(alumnoBuscar, studentsList)

// if (searchResultFinal !== false) {
//     alert('El usuario esta en la lista')
// }else{
//     alert('No existe!!!')
// }
