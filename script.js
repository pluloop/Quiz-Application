const prompt = document.getElementById("prompt");
const option1 = document.getElementById("o1");
const option2 = document.getElementById("o2");
const option3 = document.getElementById("o3");
const option4 = document.getElementById("o4");

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

var questionNum = 0;
var optionOne = 0;

prompt.innerText = Object.keys(qna)[questionNum];
option1.innerText = Object.values(qna)[questionNum][optionOne];
option2.innerText = Object.values(qna)[questionNum][optionOne+1];
option3.innerText = Object.values(qna)[questionNum][optionOne+2];
option4.innerText = Object.values(qna)[questionNum][optionOne+3];