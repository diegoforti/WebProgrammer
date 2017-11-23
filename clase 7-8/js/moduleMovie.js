
var ModuleMovie = (function() {
    var exposed = {}
            
    function Movie() {
        this.id = Date.now(),
        this.title = ''
        this.year = ''
        this.actors = []
        this.director = ''
    }

    Movie.prototype.getId = function () {
        return this.id
    }
    
    Movie.prototype.getTitle = function () {
        return this.title
    }
    Movie.prototype.setTitle = function (title) {
        this.title = title
    }
    
    Movie.prototype.getYear = function () {
        return this.year
    }
    Movie.prototype.setYear = function (year) {
        this.year = year
    }
    
    Movie.prototype.getDirector = function () {
        return this.director
    }
    Movie.prototype.setDirector = function (director) {
        this.director = director
    }
    
    Movie.prototype.getActor = function (index) {
        return this.actors[index]
    }
    Movie.prototype.setActor = function (actor) {
        this.actors.push(actor)
    }
    
    Movie.prototype.showMovie = function () { 

       return ' Movie: ' + this.title 
            + ' - Year: ' + this.year 
            + ' - Director: ' + this.director 
            + ' - Actors: ' + this.getActor(0) + ' ' + this.getActor(1)
    }
    
    
    exposed.createMovie = function createMovie(idElement, inputTitle, inputYear, inputDirector, firstActor, secondActor) {

        var movie = new Movie();        
        movie.setTitle(inputTitle)
        movie.setYear(inputYear)
        movie.setDirector(inputDirector)
        movie.setActor(firstActor)
        movie.setActor(secondActor)

        
        var ul = _createUL(movie)
        var container = document.getElementById(idElement)
        container.appendChild(ul)
    }

    exposed.deleteMovie = function deleteMovie(deleteContent) {
        
         if (deleteContent != Number(deleteContent)) return
 
         var ul = document.getElementById('idULMovies')
         var li = document.getElementById(deleteContent)
 
         if(!li)return
         ul.removeChild(li)
     }
    
    exposed.showAll = function showAll(listMovies) {
        for (var index = 0; index < listMovies.length; index++) {
            var movie = listMovies[index];
            movie.showMovie()
        }
        
    }

    function _createUL(object){   
        //En caso que no exista UL lo crea.
        var ul = document.getElementById('idULMovies')
        if (!ul) {
            ul = document.createElement('ul')
            ul.id = 'idULMovies'
            ul.className = 'list-group'
        }

        var li = _createLI(object)             
        ul.appendChild(li) 

        return ul
     }
 
     function _createLI(element) {
         var li = document.createElement('li')
         var h3 = document.createElement('h3')
         var h5 = document.createElement('h5')
         var p = document.createElement('p') 
         
         h3.appendChild(document.createTextNode(element.getTitle()))

         h5.appendChild(document.createTextNode(element.showMovie()))
         
         var textNodeP  = 'Id: ' + element.getId()
         p.appendChild(document.createTextNode(textNodeP))
 
         li.id = element.getId()  
         li.className = 'list-group-item' 
         li.appendChild(h3)
         li.appendChild(h5)
         li.appendChild(p)
 
       return li
     }




return exposed
})()