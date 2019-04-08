document.addEventListener('DOMContentLoaded', () => {
function* timeGenerator(date) {
  let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  while (true) {  
    yield time.map(el => el.toString().padStart(2, '0')).join(':');

    if (time[2] < 59) {
        time[2] += 1;
    }
    else {
      time[2] = 0;
      if (time[1] < 59) {
          time[1] += 1
      }
      else {
        time[1] = 0
        if (time[0] < 23){
            time[0] += 1
        }
        else {
            time[0] = 0;
        }
      }
    }
  }
}

let currentDate = new Date();
let time = timeGenerator(currentDate);

  setInterval(() => {
      document.getElementById("display").innerHTML = time.next().value
  }, 1000)
});