
// $(document).ready(function () {
  //   $(document).scroll(function () {
    //     var scrollTop = $(window).scrollTop()
    //     $('#background1').css('top', -(scrollTop * 0.25) + 'px')
    //     $('#background2').css('top', -(scrollTop * 0.75) + 'px')
    //     $('#background3').css('top', -(scrollTop * 2) + 'px')
    //   })

$(document).ready(function () {
  console.log('Clase 14')
  $('#date').blur(function () {
    var date = $('#date').val()
    var today = moment()
    var actualMonth = today.month()
    var actualDay = today.date()

    var formatedDate = moment(date)
    var formatedMonth = formatedDate.month()
    var formatedDay = formatedDate.date()

    // var diff = moment(today).diff(formatedDate)
    if (actualDay === formatedDay && actualMonth === formatedMonth) {
      console.log('Es tu cumpleaños')
    } else {
      console.log('Día cualquiera')
    }
  })

  var a = moment([2007, 0, 28])
  var b = moment([2007, 0, 29])
  console.log(a.from(b))   // "a day ago"

  var eventTime = moment('01/01/2018')
  var currentTime = moment()

  var diffTime = eventTime - currentTime

  var duration = moment.duration(diffTime * 1000, 'milliseconds')
  console.log('duration', duration)
  var interval = 1000
  setInterval(function () {
    // duration = moment.duration(duration - interval, 'milliseconds')
      $('.countdown').text('Faltan para Año Nuevo ' + duration.days() + ' ' + duration.hours() + ':' + duration.minutes() + ':' + duration.seconds())
  }, interval)

})
