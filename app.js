
function disitalClock(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let timeFormate = 'AM'

    if(hour > 12){
        hour -= 12
        timeFormate = 'PM'
    }
     else if(hour === 0){
        hour = 12
    }

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second


   let finalTime = `${hour} : ${minute} : ${second}`
   document.querySelector('#time').innerHTML = finalTime
   document.querySelector('small').innerHTML = timeFormate

}
setInterval(disitalClock, 100)
disitalClock()






























