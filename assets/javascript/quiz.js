// QUIZ ASSETS //
const questions = [
  {
    question: "Which one of these are not a Javascript data type?",
    answers: ["Number", "Boolean", "Type", "String"],
    correctAnswer: "Type"
  },
  {
    question: "Which one of these returns false?",
    answers: ["var x = 0;", "'false'", "69", "8 + 2"],
    correctAnswer: "var x = 0;"
  },
  {
    question: "How do you write an alert box?",
    answers: ["alert()", "confirm()", "say()", "prompt()"],
    correctAnswer: "alert()"
  },
  {
    question: "How do you start a for loop?",
    answers: ["for (length < i; 1++)", "for (var i = 0; length > i)", "for (i++)", "for (i = 0; i < length; i++)"],
    correctAnswer: "for (i = 0; i < length; i++)"
  },
  {
    question: "How do you write a function?",
    answers: ["function = ()", "function.functionName()", "function functionName()", "var function()"],
    correctAnswer: "function functionName()"
  },
];

// Quiz correct answers
var correctAnswers = [questions[0].answers[2], questions[1].answers[0], questions[2].answers[0], questions[3].answers[3], questions[4].answers[2]];

// PAGE FUNCTIONALITY //

// Starting time for timer
var timeRemaining = 60;

// Start button
document.getElementById("start").addEventListener('click', function () {
  // Shows time remaining
  document.getElementById("timerText").innerText = timeRemaining;
  // Reveals quiz block with questions/answers
  document.getElementById("main").style.display = 'block';
  // Hides start button so that it can't be clicked more than once
  document.getElementById("start").style.display = 'none';
  // ...and then shows timer
  document.getElementById("start2").style.display = 'block';
  clockTimer();
  // Shows first question
  nextQuestion();
})

// Timer functionality
function clockTimer() {
  var countdown = setInterval(function () {
    timeRemaining--;
    document.getElementById("timeRemaining").innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

// Page number of questions
var pageCount = 0;

// Answer button functionality
class Choice {
  constructor(choiceNumber) {
    choiceNumber.addEventListener('click', function () {
      if (correctAnswers.indexOf(choiceNumber.innerText) !== -1) {
        for (i = 0; i < questions[pageCount].answers.length; i++) {
          document.getElementById('main').removeChild(document.getElementById('answer' + i));
        }
        pageCount++;
        nextQuestion();
      } else {
        choiceNumber.style.backgroundColor = 'red';
        choiceNumber.style.borderColor = 'red';
        timeRemaining -= 3;
      }
    })
  }
}

// QUIZ POPULATION //
function nextQuestion() {

  // Before last answer is selected
  if (pageCount < questions.length) {
    // Write question to main card
    document.querySelector("#question").textContent = questions[pageCount].question;

    // Write answers to main card
    for (i = 0; i < questions[pageCount].answers.length; i++) {
      var answerBtn = document.createElement('button');
      answerBtn.setAttribute('class', 'btn btn-primary btn-lg btn-block');
      answerBtn.setAttribute('id', 'answer' + i);
      answerBtn.innerText = questions[pageCount].answers[i];
      document.getElementById('main').appendChild(answerBtn);
      new Choice(document.getElementById('answer' + i));
    }
  }

  // After last answer chosen
  if (pageCount == questions.length) {
    endingCard();
  }
}

// SCORING AND LOCAL STORAGE //
// var highScores = JSON.parse(localStorage.getItem("games")) || [];
var score = 0;

function endingCard() {
  // Show high score button
  document.getElementById('highScoreBtn').style.display = 'block';

  // Score at end of game
  score = timeRemaining;
  // Store the game score 
  localStorage.setItem('score', score);
  // Renders score for user to view
  document.querySelector("#question").textContent = "Your score: " + score;
}

// High score button on last card. Takes user to highscore page.
document.getElementById("highScoreBtn").onclick = function () {
  location.href = "highscores.html";
}