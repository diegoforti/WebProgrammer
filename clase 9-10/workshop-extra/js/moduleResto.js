var ModuleResto = (function() {

    var exposed = {}

    function Resto(name, address, phone) {
        this.id = Date.now()
        this.name = name
        this.address = address
        this.phone = phone
    }

    Resto.prototype.getId = function () {
        return this.id    
    }

    Resto.prototype.getName = function () {
        return this.name        
    }

    Resto.prototype.setName = function (name) {
        this.name  = name      
    }

    Resto.prototype.getAddress = function () {
        return this.address        
    }

    Resto.prototype.setAddress = function (address) {
        this.address  = address      
    }

    Resto.prototype.getPhone = function () {
        return this.phone        
    }

    Resto.prototype.setPhone = function (phone) {
        this.phone  = phone      
    }


    exposed.add = function add(name, address, phone) { 

        var resto = new Resto(name, address, phone)

        if (!_validate(resto))  return
        
        var ul = _createUL(resto)
        var container = document.getElementById('contentList')
        container.appendChild(ul)
        
    }    

    exposed.delete = function deleteElement(id) {
        
        if (!parseInt(id)){
            alert('Enter an Resto id.')
            return  
        } 

        var ul = document.getElementById('ulList')
        var li = document.getElementById(id)

        if(!li){
            alert('Resto does not exist.')
            return
        }
        ul.removeChild(li)
    }

    exposed.search = function search(value) {    

        var ul = document.getElementById('ulList')
        if (!ul) {
            return
        }

        _search(value)
    }


    function _createUL(resto){        
        //En caso que no exista lo crea.
        var ul = document.getElementById('ulList')
        if (!ul) {
            ul = document.createElement('ul')
            ul.id = 'ulList'
            ul.className = 'list-group'
        }

        var li = _createLI(resto)    
        ul.appendChild(li)            

        return ul
    }

    function _createLI(resto) {
        var li = document.createElement('li')
        var h1 = document.createElement('h1')
        var p = document.createElement('p')
        var span = document.createElement('span')
        var small = document.createElement('small')
        var div = document.createElement('div')

        h1.appendChild(document.createTextNode(resto.getName()))

        p.appendChild(document.createTextNode(resto.getAddress()))

        span.appendChild(document.createTextNode('Phone: ' + resto.getPhone()))

        small.appendChild(document.createTextNode('id ' + resto.getId()))
        small.className = 'text-muted'

        div.appendChild(span)
        div.appendChild(small)
        div.className = 'd-flex justify-content-between'

        li.id = resto.getId()
        li.className = 'list-group-item flex-column align-items-start' 
        li.appendChild(h1)
        li.appendChild(p)
        li.appendChild(div)

        return li
    }

    function _search(value){         
        
        var ul = document.getElementById('ulList')
        var listLi = ul.getElementsByTagName('li');
        value = _removeDiacritics(value)
          
        for (var index = 0; index < listLi.length; index++) {
            var li = listLi[index]
            var h1 = li.getElementsByTagName('h1')[0];
            h1 = _removeDiacritics(h1.innerText)
            if (h1.indexOf(value) > -1) {
                li.style.display = "";
            } else {
                li.style.display = "none";
            }
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

    function _validate(resto) {
        
        if (resto.getName().length == 0 ) {
            alert('The field name is required')
            return false
        }

        if (resto.getAddress().length == 0 ) {
            alert('The field address is required')
            return false
        }

        if (resto.getPhone().length == 0 ) {
            alert('The field phone is required')
            return false           
        }
        
        return true 
    }   
    

    return exposed

})()