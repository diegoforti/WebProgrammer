var ListStudents = (function () {
  var exposed = {}
      
    var student = {
        name:''
    }

    exposed.load = function load() {
        var temporalList = localStorage.getItem('savedList') || []
        if (temporalList.length !==  0) {
            temporalList = JSON.parse(temporalList)

            for (var index = 0; index < temporalList.length; index++) {
                var element = temporalList[index];
                this.add(element.name)
            }
            
        }  
    }
    
    exposed.add = function add(name) { 
        
        if (parseInt(name)){
            console.log('Ingrese un nombre y apellido válido.')
            return  
        }
        
        _createLI(name)
        
        _saveNameLocalStorage(name)
        
        $('#mainList li').click(function (e) {        
            ListStudents.delete(e.target.id)
        }) 
    }    

    exposed.delete = function deleteElement(name) { 

        $('#' + name).remove();
        _removeNameLocalStorage(name)

    }

    function _createLI(value) {

      $('#mainList').append('<li id="' + value + '" class="list-group-item flex-column align-items-start">' + value + '</li>')

    }   

    function _saveNameLocalStorage(name) {
        var temporalList = localStorage.getItem('savedList') || []
        
        if (temporalList.length > 0) {
                                
            temporalList = JSON.parse(temporalList)

            for (var index = 0; index < temporalList.length; index++) {
                var element = temporalList[index];
                if (element.name === name) return
                
            }
        }            
            
        student.name = name,
               
        temporalList.push(student)
    
        var parsedList = JSON.stringify(temporalList)
        localStorage.setItem('savedList', parsedList)
    }
            
    function _removeNameLocalStorage (name) {
        var temporalList = localStorage.getItem('savedList') || []
    
        if (temporalList.length === 0 ) return
    
        temporalList = JSON.parse(temporalList)
    
        var studentIndex = _searchStudentPro(name, temporalList)
        if (studentIndex !== false) temporalList.splice(studentIndex, 1)
    
        var parsedList = JSON.stringify(temporalList)
        localStorage.setItem('savedList', parsedList)
        
    } 

    function _searchStudentPro (name, studentList) {            
        var indice = -1
        
        for (var index = 0; index < studentList.length; index++) {
            var element = studentList[index];
            if (element.name === name)   {
                indice = index
                    break
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
