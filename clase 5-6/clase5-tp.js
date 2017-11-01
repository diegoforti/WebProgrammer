
// Crea una función que permita comparar dos palabras sin importar si tienen mayúsculas, 
// minúsculas o tilde

// var firstText = prompt('Ingrese la primer palabra.')
// var secondText = prompt('Ingrese la segunda palabra.')

// alert(compareTextNoDiacritics(firstText, secondText))

var objectList = [
    { firstName: 'Adrián', lastName: 'Ferré' },
    { firstName: 'Mateo', lastName: 'Molina' },
    { firstName: 'Maria', lastName: 'Fernandez' }
  ]

function compareTextNoDiacritics (text1, text2) {

    if (parseInt(text1) || parseInt(text2)) {
        console.error('El/los texto/s ingresado/s debe/n contener palabras')
        return false
    }

    var text1Converted = removeDiacritics(text1)
    var text2Converted = removeDiacritics(text2)

    return (text1Converted === text2Converted) 
}

// Crea una función que permita buscar un nombre en un array de objetos sin importar si tienen mayúsculas, 
// minúsculas o tilde

var name = prompt('Ingrese el nombre del alumno.')
alert(searchObjectList(name, objectList))

function searchObjectList (studentName, objectList) {
    var result  = false

    for (var index = 0; index < objectList.length; index++) {
        var studentObject = objectList[index];
        result = compareTextNoDiacritics(studentName, studentObject.firstName)
        if (result) break
    } 

    return result    
}
