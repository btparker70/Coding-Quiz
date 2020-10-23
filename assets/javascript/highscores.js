// Quiz button 'back' to quiz page
document.getElementById("quizBtn").onclick = function () {
    location.href = "index.html";
}

// Input field for name
var nameForm = document.getElementById('nameForm');

// Output div for name and score
var highScoreList = document.getElementById('nameDisplay');

// HIGH SCORES //
// This takes is the 'games' array of objects,
// ... or makes an empty array if there are no games
var highScores = JSON.parse(localStorage.getItem("games")) || [];

var i = 0;

// Name form event listners
nameForm.onkeydown = function (e) {
    // When enter key pressed
    if (e.keyCode == 13) {
        // If the field isn't blank, add name and score to highscores array
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

        // Update 'games' object to current 'high scores'
        localStorage.setItem('games', JSON.stringify(highScores));

        // Render high scores for user
        var newScore = document.createElement('div');
        newScore.textContent = 'Name: ' + newGame.name + ' Score: ' + score;
        highScoreList.appendChild(newScore);
        i++;
    }
};

// Shows previous high scores if any are stored
function renderHighscores() {
    //do something for sorting scores !!!
    for (i = 0; i < highScores.length; i++) {
        var newScore = document.createElement('div');
        newScore.textContent = 'Name: ' + highScores[i].name + ' Score: ' + highScores[i].score;
        highScoreList.appendChild(newScore);
    }
}
renderHighscores()