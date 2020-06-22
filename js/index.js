// Set the date we're counting down to
var countDownDate = new Date("Nov 5, 2020 13:00:00").getTime();

// Update the count down every 1 second
var countdown = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  //document.getElementById("countdown").innerHTML = days + "dias " + hours + "horas "
  //+ minutes + "minutos " + seconds + "segundos ";

  document.getElementById("countdown-dias").innerHTML = days;
  document.getElementById("countdown-horas").innerHTML = hours;
  document.getElementById("countdown-minutos").innerHTML = minutes; 
  document.getElementById("countdown-segundos").innerHTML = seconds;

  document.getElementById("countdown-dias2").innerHTML = days;
  document.getElementById("countdown-horas2").innerHTML = hours;
  document.getElementById("countdown-minutos2").innerHTML = minutes; 
  document.getElementById("countdown-segundos2").innerHTML = seconds;
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-principal");
const logo = document.querySelector(".logo");



hamburger.addEventListener("click", function(){
  navLinks.classList.toggle("open");
  logo.classList.toggle("display-none");
})


/*
function countdown(){
    var now= new Date();
    var eventDate = new Date(now.getFullYear(), 11, 25);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 600);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 600;
    s %= 1000;
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + m : m;

    document.getElementById("dias").textContent = d;
    document.getElementById("dias").innerText = d;

    document.getElementById("horas").textContent = h;
    document.getElementById("minutos").textContent = m;
    document.getElementById("segundos").textContent = s;

    setTimeout(countdown, 1000);
}

countdown();
*/