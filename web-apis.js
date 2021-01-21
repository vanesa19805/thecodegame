// the start timer
var startButton= document.querySelector(".start-button");
var secondsCountDown= 75;
var clock= document.querySelector("#clock-time")
var timerInterval

var startDiv= document.querySelector("#startDiv");
var endingDiv= document.querySelector("#endingDiv");



startButton.addEventListener("click", setTime);
function setTime(){

    timerInterval= setInterval(function(){
        secondsCountDown--;
        clock.textContent= secondsCountDown+ "Time left";
        if(secondsCountDown===0){
            clearInterval(timerInterval);
           // sendMessage("Done!");
        }
        startDiv.classList.add("hide")

   
    },1000);
   
}

// start button, codding quiz challange, small paragraph
// 75 second - each questions are 15 seconds there are 5
// it decrese by -1 second
//if wrong deduct 15 seconds
//if right, it goes to the next question
// clicking button results in correct or wrong answer
// clicking button answer, prompt to next question
// ending gives you how many seconds you have let and that is your score
// last page hides after inputing innitials
//submit innitials
// displays scoreboard
// allows you to return to main page 