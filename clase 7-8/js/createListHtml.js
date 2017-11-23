
  var createArrayHtml = (function() {
    var exposed = {}

    //idElement: id elemento html, arrayParam: array de alumnos 
    exposed.addElement = function addElement(idElement, arrayParam) {

        if (!Array.isArray(arrayParam)) {
           return
        }

        var ul = _createUL(arrayParam)
        var container = document.getElementById(idElement)
        container.appendChild(ul)
        
    }

    exposed.addElementByForm = function addElementByForm(idElement, firstName, lastName, dni) {

        objectParam = [{ firstName: firstName, lastName: lastName , dni: dni }]

        var ul = _createUL(objectParam)
        var container = document.getElementById(idElement)
        container.appendChild(ul)
        
    }

    exposed.deleteElement = function deleteElement(deleteContent) {
       
        if (deleteContent != Number(deleteContent)) return

        var ul = document.getElementById('idListAlumn')
        var li = document.getElementById(deleteContent)

        if(!li)return
        ul.removeChild(li)
    }

    exposed.sortList = function sortList(idElement) {
        
         var container = document.getElementById(idElement)
         var li = container.getElementsByTagName('li')

         var a = sortLi(li)
     }

    function _createUL(arrayParam){        
       //En caso que no exista lo crea.
        var ul = document.getElementById('idListAlumn')
        if (!ul) {
            ul = document.createElement('ul')
            ul.id = 'idListAlumn'
            ul.className = 'list-group'
        }

        for (var index = 0; index < arrayParam.length; index++) {
            var element = arrayParam[index];
            var li = _createLI(element)
            
            ul.appendChild(li)
        }

        return ul
    }

    function _createLI(text) {
        var li = document.createElement('li')
        var h1 = document.createElement('h1')
        var p = document.createElement('p')

        var textNodeP  = text.firstName + ' ' + text.lastName
        h1.appendChild(document.createTextNode(textNodeP))

        p.appendChild(document.createTextNode('DNI: ' + text.dni))

        li.id = text.dni   
        li.className = 'list-group-item' 
        li.appendChild(h1)
        li.appendChild(p)

      return li
    }

    function sortLi(li){

        var arrayLi = Array.prototype.slice.call(li)

        arrayLi.sort(function (a, b) {
            if (a.innerText > b.innerText) {
              return 1;
            }
            if (a.innerText < b.innerText) {
              return -1;
            }
            //si son iguales
            return 0;
          });

        //   objectParam = [{ firstName: firstName, lastName: lastName , dni: dni }]
        //   for (var index = 0; index < li.length; index++) {
        //     var element = li[index];
        //     objectParam = [{ firstName: firstName, lastName: lastName , dni: dni }]
        //     var li = _createLI()
        // }


          return arrayLi
    }

    return exposed
  })()