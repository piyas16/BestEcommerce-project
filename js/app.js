// Set the date we're counting down to
var countDownDate = new Date("oct 30, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"document.getElementById("demo").innerHTML = days + " " + hours + " " +
    // minutes + " " + seconds + " ";
    document.querySelector(".inday").innerHTML = days + " ";
    document.querySelector(".inhoure").innerHTML = hours + " ";
    document.querySelector(".inminuts").innerHTML = minutes + " ";
    document.querySelector(".insecond").innerHTML = seconds + " ";

    document.querySelector(".inday1").innerHTML = days + " ";
    document.querySelector(".inhoure1").innerHTML = hours + " ";
    document.querySelector(".inminuts1").innerHTML = minutes + " ";
    document.querySelector(".insecond1").innerHTML = seconds + " ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".inday").innerHTML = 0 + " ";
        document.querySelector(".inhoure").innerHTML = 0 + " ";
        document.querySelector(".inminuts").innerHTML = 0 + " ";
        document.querySelector(".insecond").innerHTML = 0 + " ";
    }
}, 1000);