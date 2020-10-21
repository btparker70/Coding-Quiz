var firstNameInput = document.querySelector("#first-name");
var submitBtn = document.querySelector("#submit");
var userFirstNameSpan = document.querySelector("#user-first-name");

document.getElementById("quizBtn").onclick = function () {
    location.href = "index.html";
}



submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var user = {
        firstName: firstNameInput.value.trim(),
      };

      console.log(user);
      localStorage.setItem("user", user);

      var lastUser = localStorage.getItem("user");
      userFirstNameSpan.textContent = lastUser.name;

     
})






// document.querySelector("#highScore1").innerHTML = test;

//var lastUser = localStorage.getItem('high score');

// document.getElementById('form').addEventListener('submit', function(event){
//     event.preventDefault();
//     // var formText = 
// })