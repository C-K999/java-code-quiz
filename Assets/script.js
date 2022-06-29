// Adding event listeners
document.getElementById("hsLink").addEventListener("click", displayHighScores);
document.getElementById("BB").addEventListener("click", goBack);
document.getElementById("clearScores").addEventListener("click", resetHS);
document.getElementById("quizStart").addEventListener("click", startQuiz);
document.getElementById("initialsBtn").addEventListener("click", saveName);

const recordhighScores = "QuizList";
const lastModule = 6;

var timerCountdown = 60;
var highScores = [];
var interval;

// Onclick event for "View Highscores" button on navigation bar
function displayHighScores() {

    clearInterval(interval);
    resetHSList();

    var highscoresSection = document.getElementById("highscores");
    var highscoresList = document.getElementById("highscoreList");

    for (var i=0; i < highScores.length; i++) {
        var newListItem = document.createElement("li");
        newListItem.textContent = highScores[i];
        highscoresList.appendChild(newListItem);
    }

    var sections = document.getElementsByTagName("section");

    for (var i=0; i < sections.length; i++) {
        sections[i].hidden = true;
    }

    document.querySelector("nav").hidden = true;
    highscoresSection.hidden = false;
}

// Onclick event for "Go Back" button on Highscores section
function goBack() {
    timerCountdown = 60;
    document.getElementById("timerCount").textContent = timerCountdown.toString();

    var sections = document.getElementsByTagName("section");

    for (var i=0; i < sections.length; i++) {
        sections[i].hidden = true;
    }

    document.querySelector("nav").hidden = false;
    document.getElementById("title").hidden = false;
}

// "Start Quiz" event from the title page
function startQuiz() {
    var sections = document.getElementsByTagName("section");

    for (var i=0; i < sections.length; i++) {
        sections[i].hidden = true;
    }
    document.getElementById("module1").hidden = false;
    timerCountdown = 61;
    clearInterval(interval); 
    interval = setInterval(seTimer, 1000);
}

function seTimer() {
    if (timerCountdown <= 0) {
        gotoQ(lastModule);
        alert("Time's up!");
    }
    else {
        timerCountdown--; // decrement timer
        document.getElementById("timerCount").textContent = timerCountdown.toString();
    }
}

// Onclick event for all answer buttons
function answerButtons(event) {
    var currentQ = event.target.parentElement.getAttribute("name");
    var nextQ = parseInt(currentQ) + 1;
    var correctAnswer = event.target.parentElement.getAttribute("value");
    var inputAnswer = event.target.value;

    if (timerCountdown <= 0) {
        nextQ = lastModule;
    }

    gotoQ(nextQ);

    // To check if the answers are correct
    if (inputAnswer === correctAnswer) {
        document.getElementById("correct").hidden = false;
    }else {
        document.getElementById("incorrect").hidden = false;
        timerCountdown = timerCountdown - 10;
    }
}

function gotoQ(nextQ) {
    
    if (nextQ === lastModule) {
        clearInterval(interval);
        document.getElementById("finalScore").textContent = timerCountdown.toString();
    }

    var sections = document.getElementsByTagName("section");

    for (var i=0; i < sections.length; i++) {
        sections[i].hidden = true;
    }

    document.getElementsByName(nextQ.toString())[0].hidden = false;
}

// Onclick event for "Submit" button on Complete section
function saveName() {
    var initialsInput = document.getElementById("initials");
    var score = 0;
    var newIndex = 0; 

    for (newIndex=0; newIndex < highScores.length; newIndex++) {
        score = parseInt(highScores[newIndex].substr(-2));
        if (timerCountdown > score) {
            break;
        }
    }

    highScores.splice(newIndex, 0, initialsInput.value + " - " + timerCountdown.toString()); 
    initialsInput.value = ""; 
    setHighScores(); 
    displayHighScores(); 
}

// Adds button functionality the answers
setAnswer();

function setAnswer() {
    var answerOps = document.getElementsByClassName("answerOp")
    for (var i = 0; i < answerOps.length; i++) {
        answerOps[i].addEventListener("click", answerButtons);
    }
}

// For the "Check Highscores" link
function resetHS() {
    resetHSList();
    highScores = [];
    setHighScores();
}

// Retrieves and stores highscore list from local storage
retrieveHS();

function retrieveHS() {
    var hsList = JSON.parse(localStorage.getItem(recordhighScores));

    if (hsList) {
        highScores = hsList;
    }
}

function setHighScores() {
    localStorage.setItem(recordhighScores, JSON.stringify(highScores));
}

// For clearing the highscore list
function resetHSList() {
    var highscoresList = document.getElementById("highscoreList");

    while (highscoresList.childNodes.length > 0) {
        highscoresList.removeChild(highscoresList.childNodes[0]);
    }
}