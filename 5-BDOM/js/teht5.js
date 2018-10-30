
function timing() {
  var d = new Date();
  var sec = d.getSeconds();
  sec = parce(sec);
  var min = d.getMinutes();
  min = parce(min);
  var hour = d.getHours();
  hour = parce(hour);
  document.getElementById('kello').innerText = "Time is: "+hour+":"+min+":"+sec;

}
function parce(num) {
  if (num<10) {
    return "0"+num;
  }
  else {
    return num;
  }
}

const timer = setInterval(timing,1000);