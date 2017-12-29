var translates = [

  {
    key: 'unknown',
    es: 'Desconocido',
    en: 'Unknown'
  },
  /**Sexos */
  {
    key: 'male',
    es: 'Hombre',
    en: 'Male'
  },
  {
    key: 'female',
    es: 'Mujer',
    en: 'Female'
  },
  {
    key: 'hermaphrodite',
    es: 'Hermafrodita',
    en: 'Hermaphrodite'
  },
  /**Colores */
  {
    key: 'n/a',
    es: 'No Aplica',
    en: 'Unknown'
  },
  {
    key: 'yellow',
    es: 'Amarillo',
    en: 'Yellow'
  },
  {
    key: 'green',
    es: 'Verde',
    en: 'Green'
  },
  {
    key: 'blue',
    es: 'Azul',
    en: 'Blue'
  },
  {
    key: 'red',
    es: 'Rojo',
    en: 'Red'
  },
  {
    key: 'brown',
    es: 'Marron',
    en: 'Brown'
  },
  {
    key: 'blue-gray',
    es: 'Celeste',
    en: 'Blue Gray'
  },
  {
    key: 'black',
    es: 'Negro',
    en: 'Black'
  },
  {
    key: 'orange',
    es: 'Naranja',
    en: 'Orange'
  }
  
 

]

function genderMultiTranslate(gender, lang) {
  for (var i = 0; i < translates.length; i++) {
    if (removeDiacritics(translates[i].key) === removeDiacritics(gender)) {
      var translate = translates[i]
      return translate[lang]
    }
  }

  return gender
}


function removeDiacritics(stringParam) {    
    if (typeof stringParam === 'string') {
        if (parseInt(stringParam)) {
           console.error('removeDiacritics: Not a String')
        }else{
          stringParam = stringParam.toUpperCase()
          stringParam = stringParam.replace('Á', 'A')
          stringParam = stringParam.replace('É', 'E')
          stringParam = stringParam.replace('Í', 'I')
          stringParam = stringParam.replace('Ó', 'O')
          stringParam = stringParam.replace('Ú', 'U')
        }
    }else{
        console.info('removeDiacritics: Not a String - ' + stringParam)
    }    
    return stringParam
  }
