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
    question:"The condition in an if/else statememt is enclosed with ______",
    answers:["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
    correctAns: 2,
}

var javarrayQ = {
    question: "Arrays in JavaScript can be used to store ________",
    answers:["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"],
    correctAns: 3,
}

var stringQ = {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAns: 2,
}

var debugQ = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["1. JavaScript","2. terminal/bash", "3. for loops", "4. console.log"],
    correctAns: 3,
}

var stateQ = {
    question: "What is the symbol you use to finish a statement with in JavaScript?",
    answers: ["1. ;", "2. :","3. )","4. ,"],
    correctAns: 0,
}

// Loading the questions
var questionList = [booleanQ, ifelseQ, javarrayQ, stringQ, debugQ, stateQ];
console.log("Questions loaded.");

//For starting the quiz
var startButton = document.createElement("button");
startButton.textContent = "Start Quiz";
startButton.setAttribute("class","interactables");
headElement.append(startButton);

startButton.addEventListener("click",gameStart);



function gameStart() {

    h2El.remove();
    h3El.remove();
    startButton.remove();
    
    quizMechanics(questionList.length);

    var timerInterval = setInterval(function() {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
    
        if(timerCount <= 0) {
          clearInterval(timerInterval);
          quizEnd();
        }
  
      }, 1000);

}

function quizMechanics(QsCheck){

    var currentSet = questionList[questionList.length-QsCheck];
    var correctAnswer = currentSet.answers[currentSet.correctAns];
    


    if(timerCount <=0){
        timerCount=0;
        quizEnd();
    }

    if(page=questionList.length+1){
        quizEnd();
    }

    quizMechanics(QsCheck-1);

}

//And ending the quiz
function quizEnd(){
    h2El.style.visibility = 'visible';
    h3El.style.visibility = 'visible';
    //alert("Page will refresh.");
    console.log("Time to refresh.");
    //location.reload();
}

// Generates random numbers
function randomNo(x,y){
    var min = x;
    var max = y;
    
    var randomNo = Math.floor(Math.random()*(max-min+1)+min);
    
    return randomNo;
}