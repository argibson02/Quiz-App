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
var choiceButton0 = document.querySelector("#choiceButton0");
var choiceButton1 = document.querySelector("#choiceButton1");
var choiceButton2 = document.querySelector("#choiceButton2");
var choiceButton3 = document.querySelector("#choiceButton3");
var index = -1; // used to avoid +=1 from skipping item 0
var timeScore = 0;
var timeLeft = 0;
var timeInterval = 0;

/*Scoreboard section variables*/
var playAgainButton = document.querySelector("#playAgainButton");
var submitButton = document.querySelector("#submitButton");
var clearButton = document.querySelector("#clearButton");
var scoreboardUl = document.querySelector("#scoreboardUl");
var scoresArray = [];
var localCheck = [];


////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////////////
//------------------------------------------------Timer
function timerNumber() {
    timeLeft = 101;
    timeInterval = setInterval(function () {
        timeLeft--;
        timeCount.textContent = timeLeft;
        if (timeLeft <= 0) {
            timeScore = parseInt(timeLeft);
            localStorage.setItem("timeScore", timeLeft);
            clearInterval(timeInterval);
            choiceSection.setAttribute("style", "display:none"); //swapping out the sections
            scoreboardSection.setAttribute("style", "display:inherit");
            displayScores();
        }
    }, 1000);
}


//---------------------------------------------Function to Run Game
function runGame() {
    timerNumber();
    startSection.setAttribute("style", "display:none"); //swapping out the sections
    choiceSection.setAttribute("style", "display:inherit");
    multipleChoice();  
}

//-----------------------------------------Function for Play Again
function playAgain() {
    initialsInput.value = "";
    scoreboardSection.setAttribute("style", "display:none");
    document.getElementById("initialsText").disabled = false;
    document.getElementById("submitButton").disabled = false;
    index = -1;
    runGame();
}


//----------------------------------------------------Function for retrieving scores
function checkScores() {
    if (localStorage.getItem("scoresArray") === null) { // if the local storage array is null, we skip syncing
        return;
    }
    else if (localStorage.getItem("scoresArray") === "") { // if the local storage array is an empty string, we skip syncing
        return;
    }
    else {
        localCheck = JSON.parse(localStorage.getItem("scoresArray")); // if not null, make it var local check
    }

    if (localCheck.length > scoresArray.length) { // if local storage is longer, we make it into the function array
        scoresArray = localCheck;
    }
}


//----------------------------------------------------Function for displaying scores
function displayScores() {
    checkScores();
    var htmlText = "";
    for (let i = 0; i < scoresArray.length; i++) {
    htmlText += `<li class="scoreboardLi">${scoresArray[i]}</li>`; // adding on a list element for each item in the score array
    }
    scoreboardUl.innerHTML = htmlText;
}


//----------------------------------------------------------Penalties
function compareButtonChoice0() {
    if (parseInt(questionsObject[index].answer) !== 0) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
    }
}
function compareButtonChoice1() {
    if (parseInt(questionsObject[index].answer) !== 1) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
    }
}
function compareButtonChoice2() {
    if (parseInt(questionsObject[index].answer) !== 2) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
    }
}
function compareButtonChoice3() {
    if (parseInt(questionsObject[index].answer) !== 3) {
        var timePenalty = parseInt(timeLeft);
        timeLeft = (timePenalty - 17);
    }
}


// -------------------------------------------Multiple choice buttons and cycling logic
function multipleChoice() {
    index += 1;
    if (index > 18) {
        timeScore = parseInt(timeLeft);
        localStorage.setItem("timeScore", timeLeft);
        clearInterval(timeInterval);
        choiceSection.setAttribute("style", "display:none"); //swapping out the sections
        scoreboardSection.setAttribute("style", "display:inherit");
        displayScores();
    }
    else {
    document.getElementById("questionText").innerHTML = questionsObject[index].question;
    document.getElementById("choiceButton0").innerHTML = questionsObject[index].choices[0];
    document.getElementById("choiceButton1").innerHTML = questionsObject[index].choices[1];
    document.getElementById("choiceButton2").innerHTML = questionsObject[index].choices[2];
    document.getElementById("choiceButton3").innerHTML = questionsObject[index].choices[3];
    }
}


//-----------------------------------------------Saving and clearing initials and scores
// Function to save scores
function saveInitials(event) {
    event.preventDefault();// KEEP!
    if (initialsInput.value === "") {
        return; // prevents null additions to the scoresArray
    } 
    else {
    var initialsHandOff = initialsInput.value.toUpperCase();  // Combining score and initials into an single string
    localStorage.setItem("initials", initialsHandOff);
    var scoreHandOff = timeScore;
    var scoreAndInitials = (initialsHandOff + ": " + scoreHandOff + " points");
    
    scoresArray.push(scoreAndInitials); // push that item to out javascript array
    localStorage.setItem("scoresArray", JSON.stringify(scoresArray));  // syncing javascript array and local storage, add to local storage

    // Clearing field and disabling further input
    initialsInput.value = "";
    document.getElementById("initialsText").disabled = true;
    document.getElementById("submitButton").disabled = true;
    }
    scoresArray = JSON.parse(localStorage.getItem("scoresArray")); //Array is stored as string in local storage. Grabbing it as an array and re-syncing the javascript array with local
    displayScores();
}

// Function for clearing scoresArray
function clearScores (event) {
    event.preventDefault();
    localStorage.setItem("scoresArray", ""); // clears local storage
    scoresArray = []; // clears javascript storage
    scoreboardUl.innerHTML = ""; 
}


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
