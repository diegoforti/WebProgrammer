var localStorageSWAPI = (function () {
    var exposed = {}
  
    exposed.save = function save(data, key) {
        _saveLocalStorage (data, key)
  
    }

    exposed.remove = function remove(data, key) {
        _removeNameLocalStorage (data, key)
    
    }

    exposed.load = function load(item) {
        var temporalList = localStorage.getItem(item || [])
        
        if(null === temporalList) temporalList = []
        
        if (temporalList.length !==  0) {
            temporalList = JSON.parse(temporalList)
        } 
        return temporalList
    } 

    exposed.existInLocalStorage = function existInLocalStorage(data) {

        var localStorageData = localStorageSWAPI.load(KEY_LOCALSTORAGE_SWAPI)

        function existInLS(element) {

            indexS = searchStringToArray(element.name, localStorageData)
            if (indexS >= 0) {
                return false
            }else{
                return true
            }
        }
        var filtrados = data.filter(existInLS);

        return filtrados
    }
      
    function _saveLocalStorage (data, key) {
        var temporalList = localStorage.getItem(key) || []
           
        if (temporalList.length > 0) temporalList = JSON.parse(temporalList)
        temporalList.push(data)
    
        var parsedList = JSON.stringify(temporalList)
        localStorage.setItem(key, parsedList)
    }
    
    function _removeNameLocalStorage (data, key) {
        var temporalList = localStorage.getItem(key) || []
    
        if (temporalList.length === 0 ) return
    
        temporalList = JSON.parse(temporalList)
    
        var objectIndex = searchStringToArray(data, temporalList)
        if (objectIndex !== false) temporalList.splice(objectIndex, 1)
    
        var parsedList = JSON.stringify(temporalList)
        localStorage.setItem(key, parsedList)
        
    } 

      //Busca el indice dentro de un array de no encontrarlo devuelve false.
    function searchStringToArray (stringParam, arrayParam) {    
        var nameConverted = removeDiacritics(stringParam)
        var searchResult = searchIndex(nameConverted, arrayParam)
        
        if (!isNaN(parseInt(searchResult))) {
            return searchResult
        }else{
            return -1 
        }
        
    }
    
    function searchIndex(stringParam, array){    
        if (typeof stringParam === 'string') {
            if (parseInt(stringParam)) {
                return false
            }        
        }else{
            return false
        }
        
        if (!Array.isArray(array)) {
            return false    
        }
        
        var indice = -1

        for(var i = 0; i < array.length; i += 1) {
            var name = removeDiacritics(array[i]['name'])
            if(name === stringParam) {
                indice = i;
            }
        }
        
        if (indice >= 0) {
            return indice
        }else{
            return false
        }
        
    }
  
    return exposed
  })()
  