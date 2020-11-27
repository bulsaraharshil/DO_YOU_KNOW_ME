var readLineSync = require("readline-sync")
var userName = readLineSync.question("What is your name? ")
console.log("Welcome", userName, "to DO YOU KNOW HARSHIL!!!")
var score = 0
function play(question, answer){
  var userAnswer = readLineSync.question(question)
  if(userAnswer == answer){
    console.log("You are right")
    score++
  }else{
    console.log("You are wrong")
    score--
  }
}

var questions = [
  questionOne = {
    question:"Where do I work? ",
    answer:"Coruscate"
  },

  questionTwo = {
    question:"Where do I live? ",
    answer:"Valsad"
  },

  questionThree = {
    question:"Which school I studied? ",
    answer:"SJC"
  },
]

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
// play(questionOne.question, questionOne.answer)
// play(questionTwo.question, questionTwo.answer)
// play(questionThree.question, questionThree.answer)
console.log("Your score is:", score)