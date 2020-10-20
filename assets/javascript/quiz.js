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
    question: "How do you write a confirm box?",
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

// Start button
document.getElementById("start").addEventListener('click', function () {
  document.getElementById("timerText").innerText = "60";
  document.getElementById("main").style.display = 'block';
  countDown();

  // Timer
  var clockStart = 60;
  function countDown() {
    setInterval(function () {
      clockStart--;
      document.getElementById("timerText").innerText = clockStart;
      // if (clockStart = 56) {
      //   return;
      // }
    }, 1000);
  }
})

// Quiz population
var i = 0;
document.querySelector("#question").innerHTML = questions[i].question;
document.querySelector("#answer1").innerHTML = questions[i].answers.a;
document.querySelector("#answer2").innerHTML = questions[i].answers.b;
document.querySelector("#answer3").innerHTML = questions[i].answers.c;
document.querySelector("#answer4").innerHTML = questions[i].answers.d;

// Choices
var li1 = document.getElementById("answer1");
var li2 = document.getElementById("answer2");
var li3 = document.getElementById("answer3");
var li4 = document.getElementById("answer4");

// Select choice
li1.addEventListener('click', function () {
  console.log(li1.innerText);
  if (correctAnswers.indexOf(li1.innerText) !== -1) {
  li1.style.backgroundColor = 'green';
} else {
  li1.style.backgroundColor = 'red';
}
})

li2.addEventListener('click', function () {
  console.log(li2.innerText);
  if (correctAnswers.indexOf(li2.innerText) !== -1) {
  li2.style.backgroundColor = 'green';
} else {
  li2.style.backgroundColor = 'red';
}
})

li3.addEventListener('click', function () {
  console.log(li3.innerText);
  if (correctAnswers.indexOf(li3.innerText) !== -1) {
  li3.style.backgroundColor = 'green';
} else {
  li3.style.backgroundColor = 'red';
}
})

li4.addEventListener('click', function () {
  console.log(li4.innerText);
  if (correctAnswers.indexOf(li4.innerText) !== -1) {
  li4.style.backgroundColor = 'green';
} else {
  li4.style.backgroundColor = 'red';
}
})


// Gets next questions
document.getElementById('next').addEventListener('click', function () {
  i++;
  // Reset background color
  li1.style.backgroundColor = 'white';
  li2.style.backgroundColor = 'white';
  li3.style.backgroundColor = 'white';
  li4.style.backgroundColor = 'white';

  // Swap in new question and answers
  document.querySelector("#question").innerHTML = questions[i].question;
  document.querySelector("#answer1").innerHTML = questions[i].answers.a;
  document.querySelector("#answer2").innerHTML = questions[i].answers.b;
  document.querySelector("#answer3").innerHTML = questions[i].answers.c;
  document.querySelector("#answer4").innerHTML = questions[i].answers.d;

  // End
  if (i == (questions.length - 1)){
  document.getElementById('next').innerText = 'End'
  document.getElementById('highScore').style.display = 'block';
  }
})

// High score button
document.getElementById("highScore").onclick = function () {
  location.href = "highscores.html";
}

var score = 1;
localStorage.setItem("high score", score);
console.log(localStorage.getItem("high score"));
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