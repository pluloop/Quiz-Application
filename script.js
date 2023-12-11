const box = document.getElementById("box"); // to get area of quiz
const prompt = document.getElementById("prompt"); // to get question area and text

// to get area of each option
const option1 = document.getElementById("o1");
const option2 = document.getElementById("o2");
const option3 = document.getElementById("o3");
const option4 = document.getElementById("o4");

// to get text of each option
const ovalue1 = document.getElementById("ovalue1");
const ovalue2 = document.getElementById("ovalue2");
const ovalue3 = document.getElementById("ovalue3"); 
const ovalue4 = document.getElementById("ovalue4");

// to give functionality to next button (go to next question)
const nextButton = document.getElementById("next-button");

// to decorate quiz and show if option is right / wrong
const green = "#9BCD80";
const red = "#FFC3C6";
const gray = "#CCD5CD";

const qna = {
    "How many rides are at Disney World?": [46, 25, 40, 54], // answer = 46
    "When did the Cold War end?": [1991, 1989, 1981, 1979], // answer = 1989
    "What is the diameter of Earth in miles?": [8000, 9919, 8282, 9000], // answer = 8000
    "How many weeks are in a year?": [49, 30, 52, 60], // answer = 52
    "In what year was the first episode of South Park aired": [2001, 2005, 1998, 1997], // answer = 1997
    "How many total time zones are there in the world?": [20, 19, 24, 23], // answer = 24
    "What year was the very first model of the iPhone released?": [2006, 2007, 1989, 2001], // answer 2007
    "How many countries are in the European Union?": [27, 24, 25, 30], // answer = 27
    "How fast was the first person ever convicted of \"speeding\" in MPH?": [8, 60, 40, 25], // answer = 8
    "How many legs does a spider have?": [6, 4, 12, 8] // answer = 8
};

var answers = [46, 1989, 8000, 52, 1997, 24, 2007, 27, 8, 8]; // to find out of option is the answer
var questionNum = 0; // to keep track of question number, changing question when necessary
var optionValue1 = 0; // to show options to answer of question
var score = 0; // to keep track of score
var answerFound = true; // used to give score if player chose right answer first time

// show initial question, options, and add button should be hidden @ first
prompt.innerText = Object.keys(qna)[questionNum];
ovalue1.innerText = Object.values(qna)[questionNum][optionValue1];
ovalue2.innerText = Object.values(qna)[questionNum][optionValue1+1];
ovalue3.innerText = Object.values(qna)[questionNum][optionValue1+2];
ovalue4.innerText = Object.values(qna)[questionNum][optionValue1+3];
nextButton.style.visibility = "hidden";

// checkChoice functions check if choice is correct and give color accordingly as well as add point if answer found first try
function checkChoice1(option){
    if (option == answers[questionNum]){
        option1.style.backgroundColor = green;
    }else{
        option1.style.backgroundColor = red;
        answerFound = false;
    }

    if (answerFound == true){
        score++;
    }

    nextButton.style.visibility = "visible";
}

function checkChoice2(option){
    if (option == answers[questionNum]){
        option2.style.backgroundColor = green;
    }else{
        option2.style.backgroundColor = red;
        answerFound = false;
    }

    if (answerFound == true){
        score++;
    }

    nextButton.style.visibility = "visible";
}

function checkChoice3(option){
    if (option == answers[questionNum]){
        option3.style.backgroundColor = green;
    }else{
        option3.style.backgroundColor = red;
        answerFound = false;
    }

    if (answerFound == true){
        score++;
    }

    nextButton.style.visibility = "visible";
}

function checkChoice4(option){
    if (option == answers[questionNum]){
        option4.style.backgroundColor = green;
    }else{
        option4.style.backgroundColor = red;
        answerFound = false;
    }

    if (answerFound == true){
        score++;
    }

    nextButton.style.visibility = "visible";
}

// optionPressed functions check if choice is correct AND reset choice first time point tracker
function option1Pressed(){
    option = ovalue1.innerText;

    checkChoice1(option);

    answerFound = true;
}

function option2Pressed(){
    option = ovalue2.innerText;

    checkChoice2(option);

    answerFound = true;
}

function option3Pressed(){
    option = ovalue3.innerText;

    checkChoice3(option);

    answerFound = true;
}

function option4Pressed(){
    option = ovalue4.innerText;

    checkChoice4(option);

    answerFound = true;
}

// when next button pressed, nextQuestion shows next question, options to question, and make button hidden (only shows if option chosen)
function nextQuestion(){
    if (questionNum < Object.keys(qna).length-1){
        // reset option status
        option1.style.backgroundColor = gray;
        option2.style.backgroundColor = gray;
        option3.style.backgroundColor = gray;
        option4.style.backgroundColor = gray;

        // change question
        questionNum++;
    
        // update text to question and options
        prompt.innerText = Object.keys(qna)[questionNum];
        ovalue1.innerText = Object.values(qna)[questionNum][optionValue1];
        ovalue2.innerText = Object.values(qna)[questionNum][optionValue1+1];
        ovalue3.innerText = Object.values(qna)[questionNum][optionValue1+2];
        ovalue4.innerText = Object.values(qna)[questionNum][optionValue1+3];

        nextButton.style.visibility = "hidden";
    }

    else{
        prompt.innerText = "Quiz Completed!";

        // get rid of option text
        ovalue1.innerText = "";
        ovalue2.innerText = "";
        ovalue3.innerText = "";
        ovalue4.innerText = "";

        // get rid of option borders
        option1.style.visibility = "hidden";
        option2.style.visibility = "hidden";
        option3.style.visibility = "hidden";
        option4.style.visibility = "hidden";
        nextButton.style.visibility = "hidden";

        // border and text to show score as a fraction and percent
        const scoreBorder = document.createElement("div");
        const scoreFraction = document.createElement("p");
        const scorePercent = document.createElement("p");
        scoreFraction.innerText = "Total score out of 10: " + score + "/10";
        scorePercent.innerText = "Total score out as a percent: " + (score * 10) + "%";
        scoreBorder.classList.add("score-border");
        scoreFraction.classList.add("score-fraction");
        scorePercent.classList.add("score-percent");
        box.appendChild(scoreBorder);
        scoreBorder.appendChild(scoreFraction);
        scoreBorder.appendChild(scorePercent);
    }
}

// checks if options are correct
option1.addEventListener("click", option1Pressed);
option2.addEventListener("click", option2Pressed);
option3.addEventListener("click", option3Pressed);
option4.addEventListener("click", option4Pressed);

// goes to next question upon nex button press
nextButton.addEventListener("click", nextQuestion);