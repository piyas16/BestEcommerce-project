// Set the date we're counting down to
var countDownDate = new Date("oct 25, 2021 15:37:25").getTime();

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
    document.getElementById("inday").innerHTML = days + " ";
    document.getElementById("inhoure").innerHTML = hours + " ";
    document.getElementById("inminuts").innerHTML = minutes + " ";
    document.getElementById("insecond").innerHTML = seconds + " ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("inday").innerHTML = 0 + " ";
        document.getElementById("inhoure").innerHTML = 0 + " ";
        document.getElementById("inminuts").innerHTML = 0 + " ";
        document.getElementById("insecond").innerHTML = 0 + " ";
    }
}, 1000);