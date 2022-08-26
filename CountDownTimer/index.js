const daysEl = document.getElementById('days')
const hoursEl =document.getElementById('hours')
const minEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const newYear = '1 Jan 2023';

function countDown(){
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const Totalseconds = (newYearDate - currentDate)/1000;
  const days = Math.floor(Totalseconds / 3600 / 24);
  const hours = Math.floor(Totalseconds / 3600) % 24;
  const minutes = Math.floor(Totalseconds / 60) % 60;
  const seconds = Math.floor(Totalseconds)%60;
  
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown,1000)