var ajax = (function () {
  var exposed = {}

  exposed.getAll = function getAll(url, callback) {   
    _ajaxCall(url, 'GET', callback)
  }

  exposed.searchByName = function searchByName(url, callback) {   
    _ajaxCall(url, 'GET', callback)    
  }

  function _ajaxCall (url, method, callback) {
    $.ajax({
      url: url,
      method: method
    })
      .done(function (response) {
        callback(null, response)
      })
      .fail(function (error) {
        callback(error)
      })
  }


  return exposed
})()
