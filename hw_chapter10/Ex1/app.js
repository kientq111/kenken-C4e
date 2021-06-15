let btnUp = document.getElementById("btnUp");
let btnDown = document.getElementById("btnDown");
let lblResult = document.getElementById("result");
let index = 0;

btnUp.addEventListener("click", function(e) {
    index++;
    lblResult.innerHTML = index;
});

btnDown.addEventListener("click", function(e) {
    index--;
    lblResult.innerHTML = index;
});