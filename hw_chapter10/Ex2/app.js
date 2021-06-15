let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");
let txtTimeInput = document.getElementById("txtTimeInput");
let countdown;

btnStart.addEventListener("click", function (e) {
    let count = txtTimeInput.value;
     countdown = setInterval(function () {
        document.getElementById("lblResult").innerHTML = count;
        count--;
        if (count === 0) {
            document.getElementById("lblResult").innerHTML = count;
            clearInterval(countdown);
        }
    }, 1000);
});

btnStop.addEventListener("click", function (e) {
    clearInterval(countdown);
});

