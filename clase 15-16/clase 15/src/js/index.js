// console.log('Clase 15')
function ajaxCall (url, cbk) {
  $.ajax({
    url: url,
    method: 'GET'
  })
    .done(function (response) {
      cbk(null, response)
    })
    .fail(function (error) {
      cbk(error)
    })
}

// var resultTotal = []
// var counter = 0

// var callback = function (error, response) {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     counter = counter + response.results.length
//     console.log('Encontrado ' + counter + ' de ' + response.count)
//     resultTotal = resultTotal.concat(response.results)
//     if (response.next) {
//       callUrl = response.next
//       ajaxCall(callUrl, callback)
//     } else {
//       console.log('Termino de buscar')
//       console.log(resultTotal)
//     }
//   }
// }

// var callUrl = 'https://swapi.co/api/starships'
// console.log('Empiezo a buscar')
// ajaxCall(callUrl, callback)


var resultTotal = []
var counter = 0
var text = prompt('Ingrese un planeta')

var callback = function (error, response) {
  if (error) {
    console.log('Error', error)
  } else {    
    counter = counter + response.results.length
    console.log('Encontrado ' + counter + ' de ' + response.count)
    resultTotal = resultTotal.concat(response.results)
    if (response.next || response.next === null) {
      console.log('-----next-------')      
      callUrl = response.next
      ajaxCall(callUrl, callback)
      createLI(response.results)
    } else {
      console.log('Termino de buscar')
      console.log(resultTotal)
    }
  }
}

function createLI(data) {

  for (var index = 0; index < data.length; index++) {
    const element = data[index]
    console.log(element.name)   
        
      $('#mainList').append('<li id="' + element.name + '" class="list-group-item list-group-item-action">' + element.name + '</li>')
  }  

}  

var callUrl = 'https://swapi.co/api/planets/?search=' + text
ajaxCall(callUrl, callback)

