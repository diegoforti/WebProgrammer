var tableManager = (function () {
  var exposed = {}

  exposed.createTable = function createTable(data, iconClass) { 
    
    _createTable(data, iconClass, _addTD)
  }

  exposed.addPeople = function addPeople(data) {

    localStorageSWAPI.save(data, KEY_LOCALSTORAGE_SWAPI)    
  }

  exposed.removePeople = function removePeople(data) {    
    
    localStorageSWAPI.remove(data, KEY_LOCALSTORAGE_SWAPI)
  }

  exposed.searchPeople = function searchPeople() {     
   
  }

  function _addTD(data, iconClass) {
    
    var iconClassValidate = iconClass

    for (var index = 0; index < data.length; index++) {
      const element = data[index]     
      var dataStr = JSON.stringify(element)

      var functAddMinus = ''

      if (iconClassValidate === 'fa fa-check') {

        var filterExistLS = localStorageSWAPI.load(KEY_LOCALSTORAGE_SWAPI)
           
        for (var indexF = 0; indexF < filterExistLS.length; indexF++) {
            const elementFiltrado = filterExistLS[indexF];
              if (elementFiltrado.name === element.name) {
                iconClass = 'fa fa-check'
                functAddMinus = "searchPeople"
                break
              }else{
                iconClass = 'fa fa-plus'
                functAddMinus = "addPeople"
              }
          }
       
      }else if (iconClassValidate === 'fa fa-plus') {
        functAddMinus = "addPeople"
      }else if (iconClassValidate === 'fa fa-minus') {
        functAddMinus = "removePeople"
      }

      $('#tableContainer tr:last').after("<tr id=" + element.name + "><th scope='row'>" +  (index + 1) + "</th>"
        + "<td>" + element.name + "</td>"
        + "<td>" + genderMultiTranslate(element.gender, 'es') + "</td>"
        + "<td>" + element.height  + " cm</td><td>" + element.mass + " kg</td>"
        + "<td>" + genderMultiTranslate(element.eye_color, 'es') + "</td>"
        + "<td><a href='#' onclick='tableManager." + functAddMinus  + "(" + dataStr  + ")'>"
        + "<i class='" + iconClass + "' aria-hidden='true' style='color:white'</i></a>"
        + "</td></tr>")
    }  
  }

  function _createTable(data, iconClass, callback){
      //if ($('#tableContainer').show()) $('#tableContainer').remove()       
      
     // $('#mainContainer i').remove()

    if ($('#tableContainer').length === 0) {
      $('#mainContainer').append('<table id="tableContainer" class="table table-striped table-dark">'
      + '<thead>'
      + '    <tr>'
      + '        <th scope="col">#</th>'
      + '        <th scope="col">Nombre</th>'
      + '        <th scope="col">Género</th>'
      + '        <th scope="col">Altura</th>'
      + '        <th scope="col">Peso</th>'
      + '        <th scope="col">Color de ojos</th>'
      + '        <th scope="col"></th>'
      + '    </tr>'
      + '</thead>'    
      + '<tbody> '
      + '    <tr></tr>'
      + '</tbody>'
      + '</table> ');       
    }      

    callback(data, iconClass);

    $('#tableContainer a').click(function (e) { 
      e.preventDefault()

      if ($(e.target).attr('class') !== 'fa fa-check') {
        $(e.target).closest('tr').remove()          
      }else{
        alert('Ya existe en "Personajes Guardados"')
      }
      
    }) 
  }

  return exposed
})()
