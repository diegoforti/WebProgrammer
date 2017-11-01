/****** Ejercicios ******/

// Crea una función que permita guardar un nombre en una lista en el localStorage

var parsedList = JSON.stringify(studentsList)

localStorage.setItem('savedList', parsedList)


function saveNameLocalStorage(studentName) {
    var temporalList = localStorage.getItem('savedList') || []
       
    temporalList = JSON.parse(temporalList)
    temporalList.push(studentName)

    var parsedList = JSON.stringify(temporalList)
    localStorage.setItem('savedList', parsedList)
}

/****** Trabajo Práctico ******/

function removeNameLocalStorage (studentName) {
    var temporalList = localStorage.getItem('savedList') || []

    temporalList = JSON.parse(temporalList)

    var studentIndex = searchStudentPro(studentName, temporalList)
    if (studentIndex !== false) temporalList.splice(studentIndex, 1)

    var parsedList = JSON.stringify(temporalList)
    localStorage.setItem('savedList', parsedList)
    
} 

// saveNameLocalStorage('ROBERTO')

// removeNameLocalStorage('CARLOS')