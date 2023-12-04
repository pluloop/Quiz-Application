const prompt = document.getElementById("prompt");

const qna = {
    "How many rides are at Disney World?": 46,
    "When did the Cold War end?": 1989,
    "What is the diameter of Earth in miles?": 8000,
    "How many weeks are in a year?": 52,
    "In what year was the first episode of South Park aired": 1997,
    "How many total time zones are there in the world?": 24,
    "What year was the very first model of the iPhone released?": 2007,
    "How many countries are in the European Union?": 27,
    "How fast was the first person ever convicted of \"speeding\" in MPH?": 8,
    "How many legs does a spider have?": 8
};

var questionNum = 0;

prompt.innerText = Object.keys(qna)[questionNum];