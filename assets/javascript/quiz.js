// QUIZ ASSETS //
const questions = [
  {
    question: "Which one of these are not a Javascript data type?",
    answers: {
      a: "Number",
      b: "Boolean",
      c: "Type",
      d: "String",
    },
    correctAnswer: "Type"
  },
  {
    question: "Which one of these returns false?",
    answers: {
      a: "var x = 0;",
      b: "'false'",
      c: "69",
      d: "8 + 2",
    },
    correctAnswer: "var x = 0;"
  },
  {
    question: "How do you write an alert box?",
    answers: {
      a: "alert()",
      b: "confirm()",
      c: "say()",
      d: "prompt()",
    },
    correctAnswer: "alert()"
  },
  {
    question: "How do you start a for loop?",
    answers: {
      a: "for (length < i; 1++)",
      b: "for (var i = 0; length > i)",
      c: "for (i++)",
      d: "for (i = 0; i < length; i++)",
    },
    correctAnswer: "for (i = 0; i < length; i++)"
  },
  {
    question: "How do you write a function?",
    answers: {
      a: "function = ()",
      b: "function.functionName()",
      c: "function functionName()",
      d: "var function()",
    },
    correctAnswer: "function functionName()"
  },
];

// Quiz correct answers
var correctAnswers = [questions[0].answers.c, questions[1].answers.a, questions[2].answers.a, questions[3].answers.d, questions[4].answers.c];

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
})

// Timer functionality
function clockTimer() {
  var countdown = setInterval(function() {
    timeRemaining--;
    document.getElementById("timeRemaining").innerText = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

// Quiz population
var i = 0;
document.querySelector("#question").innerHTML = questions[i].question;
document.querySelector("#answer1").innerHTML = questions[i].answers.a;
document.querySelector("#answer2").innerHTML = questions[i].answers.b;
document.querySelector("#answer3").innerHTML = questions[i].answers.c;
document.querySelector("#answer4").innerHTML = questions[i].answers.d;


// Select choice

// Functionality when clicking choices and their right/wrong answer
class Choice {
  constructor(choiceNumber) {
    choiceNumber.addEventListener('click', function () {
        if (correctAnswers.indexOf(choiceNumber.innerText) !== -1) {
          i++;
          nextQuestion();
        } else {
          choiceNumber.style.backgroundColor = 'red';
          choiceNumber.style.borderColor = 'red';
          timeRemaining -= 3;
        }
      })
  }
}

// Choices/answers selectors
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");

// Functionality for choices/answers
new Choice(choice1);
new Choice(choice2);
new Choice(choice3);
new Choice(choice4);

// Question field
var questionField = document.querySelector("#question")

// High score names
var highScores = JSON.parse(localStorage.getItem("games")) || [];
var score = 0;
//if right answer chosen, run function below

// Gets next questions
function nextQuestion() {

  // Reset background color
  choice1.style.backgroundColor = '#007BFF';
  choice2.style.backgroundColor = '#007BFF';
  choice3.style.backgroundColor = '#007BFF';
  choice4.style.backgroundColor = '#007BFF';

  // Reset border color
  choice1.style.borderColor = '#007BFF';
  choice2.style.borderColor = '#007BFF';
  choice3.style.borderColor = '#007BFF';
  choice4.style.borderColor = '#007BFF';

  // Ending card
  if (i >= (questions.length)) {
    document.getElementById('highScoreBtn').style.display = 'block';
    questionField.innerHTML = "Your score: ";
    choice1.style.display = 'none';
    choice2.style.display = 'none';
    choice3.style.display = 'none';
    choice4.style.display = 'none';
    document.getElementById("timerText").innerText = 123;

    //Score at end of game
    score = timeRemaining;
    localStorage.setItem('score', score);
    questionField.innerHTML = "Your score: " + score;
    console.log(localStorage.getItem('score'));
    clearInterval(score);

  }

  // Swap in new question and answers
  document.querySelector("#question").innerHTML = questions[i].question;
  choice1.innerHTML = questions[i].answers.a;
  choice2.innerHTML = questions[i].answers.b;
  choice3.innerHTML = questions[i].answers.c;
  choice4.innerHTML = questions[i].answers.d;
}

// High score button on last card. Takes user to highscore page.
document.getElementById("highScoreBtn").onclick = function () {
  location.href = "highscores.html";
}

// OLD EVENT LISTENERS FOR CHOICES //

// choice1.addEventListener('click', function () {
//   if (correctAnswers.indexOf(choice1.innerText) !== -1) {
//     i++;
//     nextQuestion();
//   } else {
//     choice1.style.backgroundColor = 'red';
//     choice1.style.borderColor = 'red';
//     timeRemaining -= 3;
//   }
// })

// choice2.addEventListener('click', function () {
//   if (correctAnswers.indexOf(choice2.innerText) !== -1) {
//     i++;
//     nextQuestion();
//   } else {
//     choice2.style.backgroundColor = 'red';
//     choice2.style.borderColor = 'red';
//     timeRemaining -= 3;
//   }
// })

// choice3.addEventListener('click', function () {
//   if (correctAnswers.indexOf(choice3.innerText) !== -1) {
//     i++;
//     nextQuestion();
//   } else {
//     choice3.style.backgroundColor = 'red';
//     choice3.style.borderColor = 'red';
//     timeRemaining -= 3;
//   }
// })

// choice4.addEventListener('click', function () {
//   if (correctAnswers.indexOf(choice4.innerText) !== -1) {
//     i++;
//     nextQuestion();
//   } else {
//     choice4.style.backgroundColor = 'red';
//     choice4.style.borderColor = 'red';
//     timeRemaining -= 3;
//   }

// })
