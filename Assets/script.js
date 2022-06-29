//DOM traversing
var body = document.body;

var hsLink = document.createElement("aside");
hsLink.textContent = "View high scores";
hsLink.setAttribute("class","static");
body.appendChild(hsLink);

var timer = document.createElement("aside");
var timerCount = 60;
timer.textContent = "Time: " + timerCount;
timer.setAttribute("class", "countdown");
body.appendChild(timer);

//Setting up the "title screen" for the quiz
var headElement = document.createElement("header");
body.appendChild(headElement);

var h2El = document.createElement("h2");
h2El.textContent = "Coding Quiz Challenge"
headElement.appendChild(h2El);

var h3El = document.createElement("h3");
h3El.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
headElement.appendChild(h3El);


// The list of questions, answer choice, and the correct one among them.
var booleanQ = {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings","2. booleans","3. alerts","4. numbers"],
    correctAns: 2,
};

var ifelseQ = {
    question:"The condition in an if/else statemetn is enclosed with ______",
    answers:["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
    correctAns: 2,
}

var javarrayQ = {
    question: "Arrays in JavaScript can be used to store ________",
    answers:["numbers and strings","other arrays","booleans","all of the above"],
    correctAns: 3,
}

//For starting the quiz
var startButton = document.querySelector("#start-button");

function gameStart() {

    h2El.style.visibility = 'hidden';
    h3El.style.visibility = 'hidden';

    var timerInterval = setInterval(function() {
      timerCount--;
      timer.textContent = "Time: " + timerCount;
  
      if(timerCount === 0) {
        clearInterval(timerInterval);
        quizEnd();
      }

    }, 1000);
}

startButton.addEventListener("click",gameStart());

//And ending the quiz
function quizEnd(){
    h2El.style.visibility = 'hidden';
    h3El.style.visibility = 'hidden';
    alert("Page will refresh.");
    console.log("Page will refresh.");
    location.reload();
}