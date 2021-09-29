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
var questionText = document.getElementById("questionText");  // delete me
var choiceButton = document.querySelector(".choiceButton");  // delete me
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
var clearButton = document.querySelector("#clearButton");
var scoreboardUl = document.querySelector("#scoreboardUl");   // delete me?
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
            //console.log(timeScore + " time score"); // delete me
            localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
            clearInterval(timeInterval);
            choiceSection.setAttribute("style", "display:none"); //swapping out the sections
            scoreboardSection.setAttribute("style", "display:inherit");
            displayScores();
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


//----------------------------------------------------Function for displaying scores
function displayScores() {
    //var localCheck = localStorage.getItem(scoresArray);
    //console.log(localCheck + " this is the local array");
    var htmlText = "";
    for (let i = 0; i < scoresArray.length; i++) {
    htmlText += `<li class="scoreboardLi">${scoresArray[i]}</li>`
    }
    scoreboardUl.innerHTML = htmlText;
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
                //console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
                displayScores();
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
                ///console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
                displayScores();
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
                //console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
                displayScores();
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
                //console.log(timeScore + " time score"); // delete me
                localStorage.setItem("timeScore", timeLeft); // logging time score, currently doiesn't work
                clearInterval(timeInterval);
                choiceSection.setAttribute("style", "display:none"); //swapping out the sections
                scoreboardSection.setAttribute("style", "display:inherit");
                displayScores();
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


//-----------------------------------------------Saving initials and scores
// Function to pull scores from storage   #3
function storeScores() {
    var newScoreArray = JSON.parse(localStorage.getItem("scoresArray")); //stored as string. Need an array
    console.log(newScoreArray); //  DELETE ME
    scoresArray =  newScoreArray; // 

}


// Function to save scores  #1
function saveInitials(event) {
    event.preventDefault();// KEEP!
    if (initialsInput.value === "") {
        return; // prevents null additions to the scoresArray
    } 
    else {
    // Combining score and initials into an single string
    var initialsHandOff = initialsInput.value.toUpperCase();
    localStorage.setItem("initials", initialsHandOff);
    var scoreHandOff = timeScore;
    var scoreAndInitials = (initialsHandOff + ": " + scoreHandOff + " points");
    console.log(scoreAndInitials); // delete me
    
    
    scoresArray.push(scoreAndInitials); // this may create a bug with scoring if someone refreshes the page
    console.log(scoresArray); // delete me
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray));
    //var scoreHandOff = localStorage.getItem(timeScore);

    // Clearing field and disabling further input
    initialsInput.value = "";
    document.getElementById("initialsText").disabled = true;
    document.getElementById("submitButton").disabled = true;
    
    // Storing new addition to local storage
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray));

    }
    storeScores();
    displayScores();
}

// Function for clearing scoresArray #2 
function clearScores (event) {
    event.preventDefault();
    localStorage.setItem("scoresArray", ""); // clears local storage
    scoresArray = []; // clears javascript storage
    console.log(scoresArray); // delete me
    scoreboardUl.innerHTML = ""; 
}



//function displayScores() {
//    for (let i = 0; i < scoresArray.length; i++);
//    var scoreboardLi = document.createElement("li");
//    scoreboardLi.textContent = scoresArray[i];
//    scoreboardLi.setAttribute("data-index", i);
//    scoreboardUl.appendChild(li);
//}



//--------------------------------------------------Event Listeners
// Event listener for submit initials button
submitButton.addEventListener("click", saveInitials);
clearButton.addEventListener("click", clearScores);

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
