# Hello, folks! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">
Thanks for visiting! My name is Brian and I am a web development student through UCSD's extension program. You can find me here at [LinkedIn](https://www.linkedin.com/in/brian-parker-79871819b/)

<br>

![HTML](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white) ![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


# Coding-Quiz
An in-browser coding quiz of basic Javascript. You have 60 seconds to answer as quickly as you can, but be careful! Any incorrect answers will subtract time! Your score is how much time is remaining at the end of the quiz. Record your high score and try again!

![screenshot](https://github.com/btparker70/Coding-Quiz/blob/main/assets/images/quiz0.png?raw=true)

# Table of Contents

* [Usage](#Usage)
* [Webpage Link](#Webpage-Link)
* [What I learned](#What-I-Learned)
* [Credits](#Credits)
* [License](#License)

# Usage
Click the "Start" button to launch a series of cards with questions and answer choices, as well as start the timer. You have 60 seconds to answer all the questions, and any incorrect answers will subtract time from the timer. 

![screenshot](https://github.com/btparker70/Coding-Quiz/blob/main/assets/images/quiz1.png?raw=true)

Once you've finished the quiz, your score will be grabbed from the remaining time, and a link to the high scores page will appear.

![screenshot](https://github.com/btparker70/Coding-Quiz/blob/main/assets/images/highscore0.png?raw=true)

Enter your name in the field to have it entered into the high scores.

![screenshot](https://github.com/btparker70/Coding-Quiz/blob/main/assets/images/highscore1.png?raw=true)

Your score will be saved so you can try again.

![screnshot](https://github.com/btparker70/Coding-Quiz/blob/main/assets/images/highscore2.png?raw=true)

# Webpage Link

https://btparker70.github.io/Coding-Quiz/

# What I learned

This project proved challenging for me in three ways: intervals, creating and appending divs through Javascript and local storage. 

The webpage uses a timer to keep track of time and provide a means of scoring. While I had no issues getting the timer to run, it was getting it to stop that proved difficult. Since the timer was wrapped inside an on-click event I was getting all kinds of problems. My eventual solution was to create multiple layers for the start button and time display div so that it appears the same to the user while circumventing the bugs.

For the high score page and the question/answer population I dynamically created and appended divs to the page. While I was comfortable creating divs in html, coding them in through Javascript proved the trickier but the better option. 

Lastly, I needed a system for recording and displaying the names and scores of the user. I used the localStorage method which I found very hard to wrap my head around, initially. When the quiz is over, the user's score it stored on the quiz page. Then on the high scores page, an empty array is created. Once the user enters their name, an object is created with both a 'name' and 'score' value. This object is pushed to the previously created array, where all the games are stored. Once there is content to this array, anytime the user goes back to the page they can see their previous games! This is a powerful tool I am sure I will be using more often in the future.

# Credits
Thank you for your help along the way!
* [Christina Shiroma](https://github.com/Christina2021)
* [Dillon Hoban](https://github.com/dillonhoban)
* [Emily Thomas](https://github.com/ethomas22)
* [Karly Paige](https://github.com/karlypaige)

# License
This repository is released under the [MIT License](https://opensource.org/licenses/MIT)