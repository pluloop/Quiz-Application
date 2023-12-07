const prompt = document.getElementById("prompt");
const option1 = document.getElementById("o1");
const option2 = document.getElementById("o2");
const option3 = document.getElementById("o3");
const option4 = document.getElementById("o4");
const ovalue1 = document.getElementById("ovalue1");
const ovalue2 = document.getElementById("ovalue2");
const ovalue3 = document.getElementById("ovalue3");
const ovalue4 = document.getElementById("ovalue4");
const green = "#9BCD80";
const red = "#FFC3C6";

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

var answers = [46, 1989, 8000, 52, 1997, 24, 2007, 27, 8, 8];
var questionNum = 0;
var optionValue1 = 0;
var score = 0;
var optionChosen = false;

prompt.innerText = Object.keys(qna)[questionNum];
ovalue1.innerText = Object.values(qna)[questionNum][optionValue1];
ovalue2.innerText = Object.values(qna)[questionNum][optionValue1+1];
ovalue3.innerText = Object.values(qna)[questionNum][optionValue1+2];
ovalue4.innerText = Object.values(qna)[questionNum][optionValue1+3];

function checkChoice1(option){
    if (option == answers[questionNum]){
        option1.style.backgroundColor = green;
    }else{
        option1.style.backgroundColor = red;
    }

    if (optionChosen == false){
        score++;
    }
}

function checkChoice2(option){
    if (option == answers[questionNum]){
        option2.style.backgroundColor = green;
    }else{
        option2.style.backgroundColor = red;
    }
}

function checkChoice3(option){
    if (option == answers[questionNum]){
        option3.style.backgroundColor = green;
    }else{
        option3.style.backgroundColor = red;
    }
}

function checkChoice4(option){
    if (option == answers[questionNum]){
        option4.style.backgroundColor = green;
    }else{
        option4.style.backgroundColor = red;
    }
}

function option1Pressed(){
    option = ovalue1.innerText;

    checkChoice1(option);
}

function option2Pressed(){
    option = ovalue2.innerText;

    checkChoice2(option);
}

function option3Pressed(){
    option = ovalue3.innerText;

    checkChoice3(option);
}

function option4Pressed(){
    option = ovalue4.innerText;

    checkChoice4(option);
}

option1.addEventListener("click", option1Pressed);
option2.addEventListener("click", option2Pressed);
option3.addEventListener("click", option3Pressed);
option4.addEventListener("click", option4Pressed);