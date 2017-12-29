const KEY_LOCALSTORAGE_SWAPI = 'people-SWAPI'

$(document).ready(function(){
    
    //Todos los Personajes
    $('#navbarAllPeopleButton').click(function (e) { 
        e.preventDefault();
        // $( "#mainContainer" ).fadeOut( 200, function() { 

       if ($('#tableContainer').show()) $('#tableContainer').remove()   
       $('#loader').show()        
        
       var resultTotal = []
       var counter = 0

        var callback =  function (error, response) {      
            if (error) {
                console.log('Error', error)
            } else {    
                counter = counter + response.results.length
                resultTotal = resultTotal.concat(response.results)
                console.log('Encontrado ' + counter + ' de ' + response.count)
                if (response.next || response.next !== null) {
                    console.log('-----next-------')      
                    var callUrl = response.next
                    ajax.getAll(callUrl, callback)
                } else {
                    $('#loader').hide()   
                    var data = localStorageSWAPI.existInLocalStorage(resultTotal)  
                    tableManager.createTable(data, 'fa fa-plus')
                    return response
                    console.log('Termino de buscar')
                    console.log(resultTotal)
                }
            }
        }

        ajax.getAll('https://swapi.co/api/people/', callback)  

        //   });
    });

    //Personajes Guardados
    $('#navbarSavedPeopleButton').click(function (e) { 
        e.preventDefault();

        if ($('#tableContainer').show()) $('#tableContainer').remove()
        $('#loader').show()     

        tableManager.createTable(localStorageSWAPI.load(KEY_LOCALSTORAGE_SWAPI), 'fa fa-minus')

        $('#loader').hide()
    });
    
    //Buscar Personaje
    $('#searchPerson').click(function (e) { 
        e.preventDefault(); 
        
        if ($('#tableContainer').show()) $('#tableContainer').remove()
        $('#loader').show()  
        
        var resultTotal = []
        var counter = 0
          
        var callback =  function (error, response) {      
            if (error) {
              console.log('Error', error)
            } else {               
              counter = counter + response.results.length
              console.log('Encontrado ' + counter + ' de ' + response.count)
              resultTotal = resultTotal.concat(response.results)
              if (response.next || response.next !== null) {
                console.log('-----next-------')                    
                var callUrl = response.next
                ajax.searchByName(callUrl, callback)                   
            } else {
                $('#loader').hide()   
                tableManager.createTable(resultTotal, 'fa fa-check')
                console.log('Termino de buscar')
                console.log(resultTotal)
              }
            }
        }
        
        ajax.searchByName('https://swapi.co/api/people/?search=' + $('#inputSearch').val(), callback)
    });
    


})

