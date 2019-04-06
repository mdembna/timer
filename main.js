
let date = new Date();
let min = date.getMinutes();
let sec = date.getSeconds();
let hour = date.getHours();
function* secondGenerator() {
    let current = sec;
    while (true) {  
      yield current.toString().padStart(2, '0');
      if (current < 59) {
          current += 1;
      }
      else {
          current = 0;
          min = minutes.next().value
      }
    }
}
function* minutesGenerator() {
    let current = min+ 1;
    while (true) {  
      yield current;
      if (current < 59) {
          current += 1;
      }
      else {
          current = 0;
          hour = hours.next().value
      }
    }
}
function* hoursGenerator() {
    let current = hour + 1;
    while (true) {  
      yield current;
      if (current < 23) {
          current += 1;
      }
      else {
          current = 0;
      }
    }
}
  

  let seconds = secondGenerator();
  let minutes = minutesGenerator();
  let hours = hoursGenerator();

  setInterval(() => {
      document.getElementById("display").innerHTML = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${seconds.next().value}`
  }, 1000)
