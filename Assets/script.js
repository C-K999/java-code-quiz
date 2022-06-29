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

var headElement = document.createElement("header");
body.appendChild(headElement);

var h2El = document.createElement("h2");
h2El.textContent = "Coding Quiz Challenge"
headElement.appendChild(h2El);

var h3El = document.createElement("h3");
h3El.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
headElement.appendChild(h3El);

var booleanQuestion = {
    entryNo: 0,
    question: "Commonly used data types DO NOT include:",
    answers: ["strings","booleans","alerts","numbers"],
    correctAns: 3,
};

