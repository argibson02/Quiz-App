/*Global Variables, */
/*Questions Variables*/
var questionsObject = [
    {
        question: "What color is Garfield?",
        choices: ["Orange", "White", "Grey", "Blue"],
        answer: 0,
    },
    {
        question: "What is Garfield’s favorite food?",
        choices: ["Tuna", "Purina", "Lasagna", "Pizza"],
        answer: 3,
    },
    {
        question: "What day does Garfield hate?",
        choices: ["Wednesdays", "Mondays", "Fridays", "Sundays"],
        answer: 3,
    },
    {
        question: "Who is Garfield’s dog friend?",
        choices: ["Clive", "Frank", "Odie", "Hale"],
        answer: 2,
    },
    {
        question: "What kind of dog is Odie?",
        choices: ["Chihuahua", "German Shepherd", "Labrador", "Beagle"],
        answer: 3,
    },
    {
        question: "Who is Garfield’s owner?",
        choices: ["Jon Arbuckle", "Lyman Turner", "Jack Sandman", "Al Murray"],
        answer: 0,
    },
    {
        question: "What is the name of Garfield’s teddy bear?",
        choices: ["Teddy", "Billy", "Pooky", "Harry"],
        answer: 2,
    },
    {
        question: "Which number is Garfield thinking of right now?",
        choices: ["3", "63", "92", "Lasagna"],
        answer: 3,
    },
    {
        question: "Who is Garfield’s vet?",
        choices: ["Dr. Julie Payne", "Dr. Liz Wilson", "Dr. Joanna Cauldron", "Dr. Vanessa Marshall"],
        answer: 1,
    },
    {
        question: "Who is Garfield’s nemesis?",
        choices: ["Nermal", "Arlene", "Odie", "Dr. Liz Wilson"],
        answer: 0,
    },
    {
        question: "What color is Nermal?",
        choices: ["Pink", "Grey", "White", "Calico"],
        answer: 1,
    },
    {
        question: "How many live-action Garfield movies are there?",
        choices: ["1", "2", "3", "4"],
        answer: 1,
    },
    {
        question: "How many panels are in a normal Garfield strip?",
        choices: ["3", "4", "5", "6"],
        answer: 0,
    },
    {
        question: "How many panels are in a Sunday Garfield strip? (Not including the header panel)",
        choices: ["6", "7", "8", "9"],
        answer: 1,
    },
    {
        question: "How old is Garfield in real-world years?",
        choices: ["24", "36", "43", "48"],
        answer: 2,
    },
    {
        question: "Which cat has a crush on Garfield?",
        choices: ["Arlene", "Fluffy", "Ivy", "Abigail"],
        answer: 0,
    },
    {
        question: "What color is Arlene?",
        choices: ["Grey", "White", "Calico", "Pink"],
        answer: 3,
    },
    {
        question: "Can Jon understand what Garfield says?",
        choices: ["Yes", "No", "Sometimes", "It's not canonically defined"],
        answer: 1,
    },
    {
        question: "What has Garfield given up on?",
        choices: ["Mousing", "Mondays", "Diets", "All of the above"],
        answer: 3,
    },
    {
        question: "Why does Garfield hate Mondays???? Garfield is a cat. Every day is the same for him.",
        choices: ["I know, right?", "I know, right?", "I know, right?", "I know, right?"],
        answer: 1,
    },
]

//0-19
var answerKeyArray2 = [0, 2, 1, 0, 3, 0, 2, 3, 1, 0, 1, 1, 0, 1, 2, 0, 3, 1, 3, 5];
console.log(questionsObject[0].question);
console.log(questionsObject[0].choices[0]);
console.log(questionsObject[0].answer);






/*-Section variables for hiding/showing-*/
var startSection = document.querySelector("#startSection");
var choiceSection = document.querySelector("#choiceSection");
var scoreboardSection = document.querySelector("#scoreboardSection");

/*Start section variables*/
var startButton = document.querySelector("#startButton");
var initials = document.getElementById("initialText"); //might need to change the method



/*Choice section variables*/
var timeCount = document.getElementById("timerNumber");
var questionText = document.getElementById("questionText");
var choiceButton = document.querySelector(".choiceButton")
var choiceButton0 = document.getElementById("#choiceButton0");
var choiceButton1 = document.getElementById("#choiceButton1");
var choiceButton2 = document.getElementById("#choiceButton2");
var choiceButton3 = document.getElementById("#choiceButton3");
///var scoreTime = 


/*Scoreboard section variables*/
var playAgainButton = document.querySelector("#playAgainButton");




/*Functions for game----------------------------------------------------------------------------------------------*/
function runGame() {
    timerNumber();
    startSection.setAttribute("style", "display:none"); //swapping out the sections
    choiceSection.setAttribute("style", "display:inherit");
    multipleChoice()
    
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*------MULTIPLE CHOICE BUTTONS, CYCLING, SCORING--------------------------------------------------------------------------------------------------------------------------------*/

function multipleChoice() {

    
    document.getElementById("questionText").innerHTML = questionsObject[0].question;
    document.getElementById("choiceButton0").innerHTML = questionsObject[0].choices[0];
    document.getElementById("choiceButton1").innerHTML = questionsObject[0].choices[1];
    document.getElementById("choiceButton2").innerHTML = questionsObject[0].choices[2];
    document.getElementById("choiceButton3").innerHTML = questionsObject[0].choices[3];


}

multipleChoice()

function choiceButtonClick(event) {
    event.stopPropagation();

} 
choiceButton.addEventListener("click", );

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------SAVING INITIALS AND SCORE?-WIP--------------------------------------------------------------------------------------------------------------------*/
/*see #25*/
function saveInitials() {
    // Save related form data as an object
    var scoreInitials = {
      initials: initials.value.trim(),
      time: time.value, //needs to define this
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("saveInitials", JSON.stringify(saveInitials));
  }

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------SAVING SCORE?-WIP--------------------------------------------------------------------------------------------------------------------*/
function showScores() {
    var score = JSON.parse(localStorage.getItem("timeScore"));
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------TIMER   WIP-------------------------------------------------------------------------------------------------------------------------------------*/
/*SEE 10, COUNT DOWN IS WORKING*/
function timerNumber() {
    var timeLeft = 3000;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeCount.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            choiceSection.setAttribute("style", "display:none"); //swapping out the sections
            scoreboardSection.setAttribute("style", "display:inherit");
            //log score function 
        }
        //else if { //question numer is great than 20, go to scoreboard*/
        //    localStorage.getItem(timeLeft)
    //}
    }, 1000);
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*Play again button logic--------------------------------*/
function playAgain() {
    scoreboardSection.setAttribute("style", "display:none");
    runGame()
}



// event listener for start game and play again
startButton.addEventListener("click", runGame);
playAgainButton.addEventListener("click", playAgain);


// localStorage.setItem("time", value)
// localStorage.getItem("time")
//var choiceButtonDynamic0 = document.getElementById("#choiceButton0");
//var choiceButtonDynamic1 = document.getElementById("#choiceButton1");
//var choiceButtonDynamic2 = document.getElementById("#choiceButton2");
//var choiceButtonDynamic3 = document.getElementById("#choiceButton3");