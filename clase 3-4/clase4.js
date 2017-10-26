
// function User(firstName, age){
//     this.id = Math.random()
//     this.firstName = firstName
//     this.age = age
// }

// User.prototype.showMessagename = function () {
//     console.log('Hola soy', this.firstName)
// }

// User.prototype.getFirstname = function () {
//     return this.firstName
// }

// User.prototype.setFirstname = function (firstName) {
//     this.firstName = firstName
// }

// var newUser = new User('Lucas', 30)

// var secondUser = new User('Diego', 22)


// newUser.showMessagename()

// secondUser.setFirstname('Carlos')

// console.log(secondUser.firstName)
// console.log(secondUser.getFirstname())

/******** Ejercicios ************/

function User(firstName, lastName, age, address){
    this.id = Date.now()
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
}

User.prototype.showFullName = function () {
    return 'El usuario es', this.firstName + ' ' +  this.lastName + ' con ID: ' + this.id
}

User.prototype.isLegalAge = function () {
   return  (this.age > 18) ? 'SI' : 'NO' 
}

var user = new User('Diego', 'Alonso', 19, 'calle 332')

console.log('El usuario ' + user.showFullName() + '.¿Es mayor de edad?  ' + user.isLegalAge())

/******** Trabajo Practico - Peliculas y actores************/

function Movie() {
    this.id = Date.now(),
    this.title = ''
    this.year = ''
    this.actor = []
    this.director = ''
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
    return this.actor[index]
}
Movie.prototype.setActor = function (actor) {
    this.actor.push(actor)
}

Movie.prototype.showMovie = function () {
    alert(' Pelicula: ' + this.title 
        + '\n Estreno: ' + this.year 
        + '\n Director: ' + this.director 
        + '\n Actores: ' + this.getActor(0) + ', ' + this.getActor(1))
}

function createMovie(listMovies) {
    for (var index = 0; index < 3; index++) {
        
        var movie = new Movie();
        
        movie.setTitle(prompt('Ingrese el titulo de la pelicula'))
        movie.setYear(prompt('Ingrese el año de la pelicula'))
        movie.setDirector(prompt('Ingrese el director de la pelicula'))
        movie.setActor(prompt('Ingrese el primer actor de la pelicula'))
        movie.setActor(prompt('Ingrese el segundo actor de la pelicula'))
        
        listMovies.push(movie)
        
    }
}

function showAll(listMovies) {
    for (var index = 0; index < listMovies.length; index++) {
        var movie = listMovies[index];
        movie.showMovie()
    }
    
}

var listMovies = []
createMovie(listMovies)
showAll(listMovies)