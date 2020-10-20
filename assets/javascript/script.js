// QUIZ QUESTIONS //
const questions = [
  {
    question: "Question 1",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "a"
  },
  {
    question: "Question 2",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "b"
  },
  {
    question: "Question 3",
    answers: {
      a: "answer1",
      b: "answer2",
      c: "answer3",
      d: "answer4",
    },
    correctAnswer: "c"
  },
];

// START //
document.getElementById("start").addEventListener('click', function() {
  start.style.backgroundColor = 'green';
  // document.getElementById("timerText").style.display = 'none';
  document.getElementById("timerText").innerText = "60";
  document.getElementById("main").style.display = 'block';
  countDown();

})

  // Timer
  var clockStart = 60;
  function countDown() {
    setInterval(function(){ 
      clockStart--;
      document.getElementById("timerText").innerText = clockStart;
      // if (clockStart = 56) {
      //   return;
      // }
    }, 1000);
  }



// QUIZ FUNCTIONALITY //
// Quiz poppulation
  var i = 0;
  document.querySelector("#question").innerHTML = questions[i].question;
  document.querySelector("#answer1").innerHTML = questions[i].answers.a;
  document.querySelector("#answer2").innerHTML = questions[i].answers.b;
  document.querySelector("#answer3").innerHTML = questions[i].answers.c;
  document.querySelector("#answer4").innerHTML = questions[i].answers.d;

//var.event.target.getattribute(#id)
//function
document.getElementById('answer1').addEventListener('click', function() {
  console.log("123");
  answer1.style.backgroundColor = 'green';
  
})

//Gets next questions
document.getElementById('next').addEventListener('click', function() {
  i++;
  next.style.backgroundColor = 'green';
  
  document.querySelector("#question").innerHTML = questions[i].question;
  document.querySelector("#answer1").innerHTML = questions[i].answers.a;
  document.querySelector("#answer2").innerHTML = questions[i].answers.b;
  document.querySelector("#answer3").innerHTML = questions[i].answers.c;
  document.querySelector("#answer4").innerHTML = questions[i].answers.d;
})




// //button that changes color. change div colors
// var button = document.querySelector(".button");

// function changeBlue(event) {
//   event.stopPropagation();
//   event.currentTarget.setAttribute(
//     "style",
//     "background-color: blue"
//   );
// }