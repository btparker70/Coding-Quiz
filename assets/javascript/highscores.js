// When Quiz button clicked
document.getElementById("quizBtn").onclick = function () {
    location.href = "index.html";
}

// This is the form field
var nameForm = document.getElementById('nameForm');
// This is where the name appears
var nameDisplay = document.getElementById('nameDisplay');

// High score names
var highScores = [];
//
var i = 0;
// Name form
nameForm.onkeydown = function(e){

    // var user = {
    // name: nameForm.value.trim(),
    // };

    // When enter key pressed
    if(e.keyCode == 13){
        // If the field isn't blank, add name to array highscores
        if (nameForm.value != "") {
        highScores.push(nameForm.value.trim());
    }
        // Clear the name field
        nameForm.value = "";
        console.log(highScores);
        localStorage.setItem('name', highScores[0]);
        // nameDisplay.innerHTML = 'name: ' + localStorage.getItem('name') + ' score: ';
    
        var scoreDiv = document.getElementById('nameDisplay');

        // for (i = 0; i <highScores.length; i++) {
          var newScoreDiv = document.createElement('p');
          newScoreDiv.textContent = 'Name: ' + highScores[i] + ' Score: ';
          scoreDiv.appendChild(newScoreDiv);
          i++;
        // }
    }
 };

// localStorage.setItem('name', 'smith');

// Retrieve
// nameDisplay.innerHTML = 'name: ' + localStorage.getItem('name') + ' score: ';


// var firstNameInput = document.querySelector("#first-name");
// var submitBtn = document.querySelector("#submit");
// var userFirstNameSpan = document.querySelector("#user-first-name");





// submitBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//     var user = {
//         firstName: firstNameInput.value.trim(),
//       };

//       console.log(user);
//       localStorage.setItem("user", user);

//       var lastUser = localStorage.getItem("user");
//       userFirstNameSpan.textContent = lastUser.name;

     
// })






// // document.querySelector("#highScore1").innerHTML = test;

// //var lastUser = localStorage.getItem('high score');

// // document.getElementById('form').addEventListener('submit', function(event){
// //     event.preventDefault();
// //     // var formText = 
// // })