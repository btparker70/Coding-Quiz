// Quiz button 'back' to quiz page
document.getElementById("quizBtn").onclick = function () {
    location.href = "index.html";
}

// Input field for name
var nameForm = document.getElementById('nameForm');

// Output div for name and score
var nameDisplay = document.getElementById('nameDisplay');

// High scores. This takes the "games" object from
var highScores = JSON.parse(localStorage.getItem("games")) || [];

console.log(localStorage.getItem("games"));

var i = 0;

// Name form event listners
nameForm.onkeydown = function (e) {
    // When enter key pressed
    if (e.keyCode == 13) {
        // If the field isn't blank, add name to array highscores
        if (nameForm.value != "") {
            var score = localStorage.getItem('score');
            var newGame = {
                name: nameForm.value.trim(),
                score
            }
            highScores.push(newGame);
        }
        // Clear the name field
        nameForm.value = "";
        console.log(highScores);
        localStorage.setItem('games', JSON.stringify(highScores));
        // nameDisplay.innerHTML = 'name: ' + localStorage.getItem('name') + ' score: ';

        var scoreDiv = document.getElementById('nameDisplay');

        var newScoreDiv = document.createElement('div');
        newScoreDiv.textContent = 'Name: ' + newGame.name + ' Score: ' + score;
        scoreDiv.appendChild(newScoreDiv);
        i++;
    }
};

function renderHighscores() {
    var scoreDiv = document.getElementById('nameDisplay');
    //do something for sorting scores !!!
    for (i = 0; i < highScores.length; i++) {
        var newScoreDiv = document.createElement('div');
        newScoreDiv.textContent = 'Name: ' + highScores[i].name + ' Score: ' + highScores[i].score;
        scoreDiv.appendChild(newScoreDiv);
    }
}

renderHighscores()
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