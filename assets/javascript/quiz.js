// QUIZ QUESTIONS //
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

var correctAnswers = [
  questions[0].answers.c,
  questions[1].answers.a,
  questions[2].answers.a,
  questions[3].answers.d,
  questions[4].answers.c];

// QUIZ FUNCTIONALITY //

var clockStart = 60;
var startClicks = 0;
// Start button
document.getElementById("start").addEventListener('click', function () {
  document.getElementById("timerText").innerText = clockStart;
  document.getElementById("main").style.display = 'block';
  // countDown();


  // Timer
  // var clockStart = 60;
  // function countDown() {
  //   setInterval(function () {
  //     clockStart--;
  //     document.getElementById("timerText").innerText = clockStart;
  //   }, 1000);
  // }
  // startClicks++;



  var clock = setInterval(clockTimer, 1000);

  function clockTimer() {
    clockStart--;
    document.getElementById("timerText").innerText = clockStart;
  }


  // function stopClockTimer() {
  //   clearInterval(clock);
  // }
})

// Quiz population
var i = 0;
console.log('i= ' + i);
document.querySelector("#question").innerHTML = questions[i].question;
document.querySelector("#answer1").innerHTML = questions[i].answers.a;
document.querySelector("#answer2").innerHTML = questions[i].answers.b;
document.querySelector("#answer3").innerHTML = questions[i].answers.c;
document.querySelector("#answer4").innerHTML = questions[i].answers.d;

// Choices
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");

//could name classes for these vvv
// Select choice
choice1.addEventListener('click', function () {
  if (correctAnswers.indexOf(choice1.innerText) !== -1) {
    i++;
    nextQuestion();
  } else {
    choice1.style.backgroundColor = 'red';
    choice1.style.borderColor = 'red';
    clockStart -= 3;
  }
})

choice2.addEventListener('click', function () {
  if (correctAnswers.indexOf(choice2.innerText) !== -1) {
    i++;
    nextQuestion();
  } else {
    choice2.style.backgroundColor = 'red';
    choice2.style.borderColor = 'red';
    clockStart -= 3;
  }
})

choice3.addEventListener('click', function () {
  if (correctAnswers.indexOf(choice3.innerText) !== -1) {
    i++;
    nextQuestion();
  } else {
    choice3.style.backgroundColor = 'red';
    choice3.style.borderColor = 'red';
    clockStart -= 3;
  }
})

choice4.addEventListener('click', function () {
  if (correctAnswers.indexOf(choice4.innerText) !== -1) {
    i++;
    nextQuestion();
  } else {
    choice4.style.backgroundColor = 'red';
    choice4.style.borderColor = 'red';
    clockStart -= 3;
  }

})

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
    document.querySelector("#question").innerHTML = "Your score: ";
    document.querySelector("#answer1").style.display = 'none';
    document.querySelector("#answer2").style.display = 'none';
    document.querySelector("#answer3").style.display = 'none';
    document.querySelector("#answer4").style.display = 'none';
    document.getElementById("timerText").innerText = 123;

    //Score at end of game
    score = clockStart;
    localStorage.setItem('score', score);
    document.querySelector("#question").innerHTML = "Your score: " + score;
    console.log(localStorage.getItem('score'));
    clearInterval(score);

  }

  // Swap in new question and answers
  document.querySelector("#question").innerHTML = questions[i].question;
  document.querySelector("#answer1").innerHTML = questions[i].answers.a;
  document.querySelector("#answer2").innerHTML = questions[i].answers.b;
  document.querySelector("#answer3").innerHTML = questions[i].answers.c;
  document.querySelector("#answer4").innerHTML = questions[i].answers.d;
}

// High score button
document.getElementById("highScoreBtn").onclick = function () {
  location.href = "highscores.html";
}



//from highscores.js

// // This is the form field
// var nameForm = document.getElementById('nameForm');
// // This is where the name appears
// var nameDisplay = document.getElementById('nameDisplay');

// var i = 0;
// Name form
// nameForm.onkeydown = function(e){

//     // var user = {
//     // name: nameForm.value.trim(),
//     // };

//     // When enter key pressed
//     if(e.keyCode == 13){
//         // If the field isn't blank, add name to array highscores
//         if (nameForm.value != "") {
//           var newGame = {
//             name: nameForm.value.trim(),
//             score
//           }
//         highScores.push(newGame);
//     }
//         // Clear the name field
//         nameForm.value = "";
//         console.log(highScores);
//         localStorage.setItem('games', JSON.stringify(highScores));
//         // nameDisplay.innerHTML = 'name: ' + localStorage.getItem('name') + ' score: ';
    
//         var scoreDiv = document.getElementById('nameDisplay');

//         // for (i = 0; i <highScores.length; i++) {
//           var newScoreDiv = document.createElement('div');
//           newScoreDiv.textContent = 'Name: ' + nameForm.value.trim() + ' Score: ' + score;
//           scoreDiv.appendChild(newScoreDiv);
//           i++;
//         // }
//     }
//  };


// End button
// if (document.getElementById('next').innerText = 'End') {
//   document.getElementById('next').onclick = function () {
//     location.href = "highscores.html";
//   }
// }


//var.event.target.getattribute(#id)

// //button that changes color. change div colors
// var button = document.querySelector(".button");

// function changeBlue(event) {
//   event.stopPropagation();
//   event.currentTarget.setAttribute(
//     "style",
//     "background-color: blue"
//   );
// }


// document.getElementById('next').addEventListener('click', function () {
//   i++;
//   // Reset background color
//   choice1.style.backgroundColor = '#007BFF';
//   choice2.style.backgroundColor = '#007BFF';
//   choice3.style.backgroundColor = '#007BFF';
//   choice4.style.backgroundColor = '#007BFF';

//   // Swap in new question and answers
//   document.querySelector("#question").innerHTML = questions[i].question;
//   document.querySelector("#answer1").innerHTML = questions[i].answers.a;
//   document.querySelector("#answer2").innerHTML = questions[i].answers.b;
//   document.querySelector("#answer3").innerHTML = questions[i].answers.c;
//   document.querySelector("#answer4").innerHTML = questions[i].answers.d;

//   // End
//   if (i == (questions.length - 1)){
//   document.getElementById('next').innerText = 'End'
//   document.getElementById('highScore').style.display = 'block';
//   }
// })