document.getElementById("quizBtn").onclick = function () {
    location.href = "index.html";
}

var test = localStorage.getItem('high score');

document.querySelector("#answer1").innerHTML = test;