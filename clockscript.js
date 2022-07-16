var hr = 0;
var min = 0;
var secc = 0;
var count = 0;
var timer = false;
var lapnow;
var lapnum = 0;


function pause() {
    timer = false;
    stopwatch();
}
function start() {
    if (timer != true) {
        timer = true;
        stopwatch();
    }

}
function lap() {
    if (timer == true) {
        lapnow = hr + " : " + min + " : " + secc;
        lapnum++;
        document.getElementById("lapcount").innerHTML = document.getElementById("lapcount").innerHTML + "<p>" + lapnow + "</p>" + "<hr>";
    }

}
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    secc = 0;
    count == 0;
    document.getElementById("sec").innerHTML = '00';
    document.getElementById("min").innerHTML = '00';
    document.getElementById("hour").innerHTML = '00';
    document.getElementById("lapcount").innerHTML = "";

}

function stopwatch() {
    if (timer == true) {
        count++;
        if (count == 99) {
            count = 0;
            secc++;
            if (secc < 10) {
                document.getElementById("sec").innerHTML = '0' + secc;
            }
            else
                document.getElementById("sec").innerHTML = secc;
        }
        if (secc == 60) {

            secc = 0;
            min++;
            if (min < 10) {
                document.getElementById("min").innerHTML = '0' + min;
            }
            else
                document.getElementById("min").innerHTML = min;

        }
        if (min == 60) {

            secc = 0;
            min = 0;
            hr++;
            if (hr < 10) {
                document.getElementById("hour").innerHTML = '0' + hr;
            }
            else
                document.getElementById("hour").innerHTML = hr;
        }
        setTimeout("stopwatch()", 10);
    }
}