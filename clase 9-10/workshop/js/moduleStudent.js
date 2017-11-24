var ModuleStudent = (function() {

    var exposed = {}

    var student = {
        firstName:'',
        lastName:'',
        dni:'',
        email:''
    }

        exposed.load = function load() {
            var temporalList = localStorage.getItem('savedList') || []
            if (temporalList.length !==  0) {
                temporalList = JSON.parse(temporalList)
    
                for (var index = 0; index < temporalList.length; index++) {
                    var element = temporalList[index];
                    this.add(element.firstName, element.lastName, element.dni, element.email, false)
                }
                
            }  
        }
    
        exposed.add = function add(firstName, lastName, dni, email, validate) { 
            
            if (parseInt(firstName) || parseInt(lastName)){
                alert('Ingrese un nombre y apellido válido.')
                return  
            }

            //en la primer carga no se validara.
            if(validate){
                if (!_validateStudent(firstName, lastName, dni, email))  return
            }
            
            var ul = _createUL(firstName, lastName, dni, email)
            var container = document.getElementById('contentList')
            container.appendChild(ul)

            _saveNameLocalStorage(firstName, lastName, dni, email)
            
        }    
    
        exposed.delete = function deleteElement(dni) {
           
            if (!parseInt(dni)){
                alert('Para eliminar un estudiante ingrese un DNI')
                return  
            } 
    
            var ul = document.getElementById('ulList')
            var li = document.getElementById(dni)
    
            if(!li){
                alert('No existe el DNI ingresado.')
                return
            }
            ul.removeChild(li)

            _removeNameLocalStorage(dni)
        }
    
        exposed.search = function search(value) {    

            var ul = document.getElementById('ulList')
            if (!ul) {
                return
            }

            _search(value)
        }

    
        function _createUL(firstName, lastName, dni, email){        
           //En caso que no exista lo crea.
            var ul = document.getElementById('ulList')
            if (!ul) {
                ul = document.createElement('ul')
                ul.id = 'ulList'
                ul.className = 'list-group'
            }
    
            var li = _createLI(firstName, lastName, dni, email)    
            ul.appendChild(li)            
    
            return ul
        }
    
        function _createLI(firstName, lastName, dni, email) {
            var li = document.createElement('li')
            var h1 = document.createElement('h1')
            var p = document.createElement('p')
            var span = document.createElement('span')
    
            var textNodeP  = firstName + ' ' + lastName
            h1.appendChild(document.createTextNode(textNodeP))
    
            p.appendChild(document.createTextNode('DNI: ' + dni))

            span.appendChild(document.createTextNode('Email: ' + email))
    
            li.id = dni   
            li.className = 'list-group-item flex-column align-items-start' 
            li.appendChild(h1)
            li.appendChild(p)
            li.appendChild(span)
    
            return li
        }
    
        function _search(value){         
            
            var encontrados = []
            var ul = document.getElementById('ulList')
            value = _removeDiacritics(value)

        //Esta opcion permite la busqueda mediante LI utilizando css display
            var listLi = ul.getElementsByTagName('li');
            
            for (var index = 0; index < listLi.length; index++) {
                var li = listLi[index]
                var h1 = li.getElementsByTagName('h1')[0];
                var p = li.getElementsByTagName('p')[0];
                var span = li.getElementsByTagName('span')[0];

                h1 = _removeDiacritics(h1.innerText)
                p = _removeDiacritics(p.innerText)
                span = _removeDiacritics(span.innerText)

                if (h1.indexOf(value) > -1 
                    || p.indexOf(value) > -1 
                    || span.indexOf(value) > -1) {
                    li.style.display = "";
                } else {
                    li.style.display = "none";
                }
            }  


        //Esta opcion, comentada abajo permite buscar desde el localstorage
            
            // var temporalList = localStorage.getItem('savedList') || []
            // if (temporalList.length !==  0) {
            //     temporalList = JSON.parse(temporalList)

            //     for (var index = 0; index < temporalList.length; index++) {
            //         var element = temporalList[index];

            //         var firstName = _removeDiacritics(element.firstName)
            //         var lastName = _removeDiacritics(element.lastName)
            //         var email = _removeDiacritics(element.email)

            //         if (firstName.includes(value) || lastName.includes(value) 
            //                 || element.dni.includes(value) || email.includes(value)) {                   
            //             encontrados.push(element)
            //         } 
            //     }
            // }

            // if (encontrados.length > 0) {
            //     document.getElementById('ulList').remove()
            //     for (var index = 0; index < encontrados.length; index++) {
            //         var element = encontrados[index];

            //         var ul = _createUL(element.firstName, element.lastName, element.dni, element.email)
            //         var container = document.getElementById('contentList')
            //         container.appendChild(ul)
                    
            //     }
            // }
        }

        function _saveNameLocalStorage(firstName, lastName, dni, email) {
            var temporalList = localStorage.getItem('savedList') || []
           
            if (temporalList.length > 0) {
                                    
                temporalList = JSON.parse(temporalList)
    
                for (var index = 0; index < temporalList.length; index++) {
                    var element = temporalList[index];
                    if (element.dni === dni) return
                    
                }
            }            
                
            student.firstName = firstName,
            student.lastName = lastName,
            student.dni = dni,
            student.email = email
            
            temporalList.push(student)
        
            var parsedList = JSON.stringify(temporalList)
            localStorage.setItem('savedList', parsedList)
        }
                
        function _removeNameLocalStorage (dni) {
            var temporalList = localStorage.getItem('savedList') || []
        
            if (temporalList.length === 0 ) return
        
            temporalList = JSON.parse(temporalList)
        
            var studentIndex = _searchStudentPro(dni, temporalList)
            if (studentIndex !== false) temporalList.splice(studentIndex, 1)
        
            var parsedList = JSON.stringify(temporalList)
            localStorage.setItem('savedList', parsedList)
            
        } 

        function _searchStudentPro (dni, studentList) {            
            var indice = -1
            
            for (var index = 0; index < studentList.length; index++) {
                var element = studentList[index];
                if (element.dni === dni)   {
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

        function _removeDiacritics(value) {
            
            if (typeof value === 'string') {
                
                value = value.toUpperCase()
                value = value.replace('Á', 'A')
                value = value.replace('É', 'E')
                value = value.replace('Í', 'I')
                value = value.replace('Ó', 'O')
                value = value.replace('Ú', 'U')
            }
            
            return value
        }
    
        function _validateStudent(firstName, lastName, dni, email) {
            if (firstName.length == 0 
                || lastName.length == 0) {
                alert('Nombre y Apellido Obligatorios')
                return false
            }

            if (dni.length == 0 || dni.length > 8 ) {
                alert('El DNI es obligatorio y debe ser de 8 digitos.')
                return false
            }

            if (email.length == 0 ) {
                alert('El email es un campo obligatorio.')
                return false
            }else{                
                var arroba = email.indexOf('@') !== -1
                var punto = email.indexOf('.') !== -1

                if (!arroba && !punto) {
                    alert('El email es incorrecto. Ej: tu_correo@gmail.com')
                    return false
                }        
            }
            
            var temporalList = localStorage.getItem('savedList') || []
            if (temporalList.length !==  0) {
                temporalList = JSON.parse(temporalList)

                //busca si existe el dni
                if(_searchStudentPro(dni, temporalList) !== false){
                   alert('El DNI: ' + dni +  ' ingresado ya existe.')
                   return false
                }
            }


            return true 
        }   
        
    
        return exposed

})()