////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////////////
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
        answer: 2,
    },
    {
        question: "What day does Garfield hate?",
        choices: ["Wednesdays", "Mondays", "Fridays", "Sundays"],
        answer: 1,
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
        question: "How many panels are in a Sunday Garfield strip?",
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
    //{
    //    question: "Why does Garfield hate Mondays???? Garfield is a cat. Every day is the same for him.",
    //    choices: ["I know, right?", "I know, right?", "I know, right?", "I know, right?"],
    //    answer: 1,
    //},
    {
        question: "",
        choices: [],
        answer: 0,
    },
];

/*-Section variables for hiding/showing-*/
var startSection = document.querySelector("#startSection");
var choiceSection = document.querySelector("#choiceSection");
var scoreboardSection = document.querySelector("#scoreboardSection");

/*Start section variables*/
var startButton = document.querySelector("#startButton");
var initialsInput = document.getElementById("initialsText");

/*Choice section variables*/
var timeCount = document.getElementById("timerNumber");
var questionText = document.getElementById("questionText");
var choiceButton = document.querySelector(".choiceButton");
var choiceButton0 = document.querySelector("#choiceButton0");
var choiceButton1 = document.querySelector("#choiceButton1");
var choiceButton2 = document.querySelector("#choiceButton2");
var choiceButton3 = document.querySelector("#choiceButton3");
var index = -1;
var timeScore = 0;
var timeLeft = 0;
var timeInterval = 0;

/*Scoreboard section variables*/
var playAgainButton = document.querySelector("#playAgainButton");
var submitButton = document.querySelector("#submitButton");
var scoreboardUl = document.querySelector("#scoreboardUl");
var scoresArray = [];


////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////////////
//------------------------------------------------Timer
function timerNumber() {
    timeLeft = 501;
    timeInterval = setInterval(function () {
        timeLeft--;
        timeCount.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeScore = parseInt(timeLeft);
            console.log(timeScore + " time score"); // delete me
            localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
            clearInterval(timeInterval);
            choiceSection.setAttribute("style", "display:none"); //swapping out the sections
            scoreboardSection.setAttribute("style", "display:inherit");
        }
    }, 1000);
}


//---------------------------------------------Function to Run Game
function runGame() {
    //console.log("run game") // delete me
    timerNumber();
    startSection.setAttribute("style", "display:none"); //swapping out the sections
    choiceSection.setAttribute("style", "display:inherit");
    multipleChoice();  
}

//-----------------------------------------Function for Play Again
function playAgain() {
    //console.log("play_Again") // delete me 
    scoreboardSection.setAttribute("style", "display:none");
    document.getElementById("initialsText").disabled = false;
    document.getElementById("submitButton").disabled = false;
    index = -1;
    runGame();
}

//----------------------------------------------------------Penalties
function compareButtonChoice0() {
    if (parseInt(questionsObject[index].answer) !== 0) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
        //console.log(index + "index"); // delete me
        //console.log(questionsObject[index].answer + "- answer index"); // delete me
        timeInterval = setInterval(function () {
        timeCount.textContent = timeLeft;
            if (timeLeft <= 0) {
                timeScore = parseInt(timeLeft);
                console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
            }
        },1000);
    }
}
function compareButtonChoice1() {
    if (parseInt(questionsObject[index].answer) !== 1) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
        //console.log(index + "index"); // delete me
        //console.log(questionsObject[index].answer + "- answer index"); // delete me
        timeInterval = setInterval(function () {
        timeCount.textContent = timeLeft;
            if (timeLeft <= 0) {
                timeScore = parseInt(timeLeft);
                console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
            }
        },1000);
    }
}
function compareButtonChoice2() {
    if (parseInt(questionsObject[index].answer) !== 2) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
        //console.log(index + "index"); // delete me
        //console.log(questionsObject[index].answer + "- answer index"); // delete me
        timeInterval = setInterval(function () {
        timeCount.textContent = timeLeft;
            if (timeLeft <= 0) {
                timeScore = parseInt(timeLeft);
                console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
            }
        },1000);
    }
}
function compareButtonChoice3() {
    if (parseInt(questionsObject[index].answer) !== 3) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
        //console.log(index + "index"); // delete me
        //console.log(questionsObject[index].answer + "- answer index"); // delete me
        timeInterval = setInterval(function () {
        timeCount.textContent = timeLeft;
            if (timeLeft <= 0) {
                timeScore = parseInt(timeLeft);
                console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
            }
        },1000);
    }
}


// -------------------------------------------Multiple choice buttons and cycling logic
function multipleChoice() {
    index += 1;
    if (index > 18) {
        timeScore = parseInt(timeLeft);
        console.log(timeScore + " time score"); // delete me
        localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
        clearInterval(timeInterval);
        choiceSection.setAttribute("style", "display:none"); //swapping out the sections
        scoreboardSection.setAttribute("style", "display:inherit");
    }
    else {
    //console.log(index + "index"); // delete me
    document.getElementById("questionText").innerHTML = questionsObject[index].question;
    document.getElementById("choiceButton0").innerHTML = questionsObject[index].choices[0];
    document.getElementById("choiceButton1").innerHTML = questionsObject[index].choices[1];
    document.getElementById("choiceButton2").innerHTML = questionsObject[index].choices[2];
    document.getElementById("choiceButton3").innerHTML = questionsObject[index].choices[3];
    }
}


/*---------SAVING INITIALS AND SCORE?-WIP--------------------------------------------------------------------------------------------------------------------*/
/*see #25*/
function saveInitials(event) {
    event.preventDefault();// KEEP!
   
    //console.log("save_initials"); // delete me
    //console.log(JSON.stringify(initialsInput.value)); // delete me
    var initialsHandOff = initialsInput.value.toUpperCase();
    //console.log(initialsHandOff); // delete me
    localStorage.setItem("initials", initialsHandOff);
    //console.log(timeScore + "~~~ time score"); // delete me
    var scoreHandOff = timeScore;
    //var scoreHandOff = localStorage.getItem(timeScore);
    localStorage.setItem("scoresIndividual", initialsHandOff + ":  " + scoreHandOff);



    
    // Clear field and disabling
    initialsInput.value = "";
    document.getElementById("initialsText").disabled = true;
    document.getElementById("submitButton").disabled = true;

}



/*---------Creating lines for scores--------------------------------------------------------------------------------------------------------------------*/
/*
function showScores() { //need to make sure to run this scoring function 
    scoreboardUl.innerHTML = ""
    for (let i =0; i < scoresArray.length; i++) {
        var scoreSet = scoresArray[i];
        var scoreboardLi = document.createElement("li");
        scoreboardLi.textContent = scoreSet;
        scoreboardLi.setAttribute("data-index", i);
        scoreboardUl.appendChild(li);
    }
    
}
*/



// Event listener for submit initials button
submitButton.addEventListener("click", saveInitials);

//--------------------------------------------------Event Listeners
// Event listener for start game, play again, initials
startButton.addEventListener("click", runGame);
playAgainButton.addEventListener("click", playAgain);




//  Event listener for penalties
choiceButton0.addEventListener("click", compareButtonChoice0);
choiceButton1.addEventListener("click", compareButtonChoice1);
choiceButton2.addEventListener("click", compareButtonChoice2);
choiceButton3.addEventListener("click", compareButtonChoice3);

//  Event listener for cycling choice buttons
choiceButton0.addEventListener("click", function(event) {
    event.stopPropagation();
    multipleChoice();
});
choiceButton1.addEventListener("click", function(event) {
    event.stopPropagation();
    multipleChoice();
});
choiceButton2.addEventListener("click", function(event) {
    event.stopPropagation();
    multipleChoice();
});
choiceButton3.addEventListener("click", function(event) {
    event.stopPropagation();
    multipleChoice();
});



//("submit", function(event) {
//    event.preventDefault();
//    var todoText = todoInput.value.trim();
//    // TODO: Describe the functionality of the following `if` statement.
//    if (todoText === "") {
//      return;
//    }
//   // TODO: Describe the purpose of the following lines of code.
//    todos.push(todoText);
//    todoInput.value = "";
//   
//    // TODO: What will happen when the following functions are called?
//    storeTodos();
//    renderTodos();
//  });