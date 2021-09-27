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

var answerKeyArray2 = [0, 2, 1, 0, 3, 0, 2, 3, 1, 0, 1, 1, 0, 1, 2, 0, 3, 1, 3, 5];



/*Start section variables*/
var startButton = document.querySelector("#startButton");
var initials = document.getElementById("initialText");



/*Choice section variables*/
var timeCount = document.getElementById("timerNumber");
///var scoreTime = 



console.log(questionsObject.length + " qobject01"); // DELETE UPON COMPLETION 
console.log(answerKeyArray2 + " key2"); // DELETE UPON COMPLETION 




/*Functions for game*/
function runGame () {
    timerNumber()
    
}




/*---------SAVING INITIALS AND SCORE?-WIP--------------------------------------------------------------------------------------------------------------------*/
/*see #25*/
function saveInitials() {
    // Save related form data as an object
    var scoreInitials = {
      initials: initials.value.trim(),
      time: time.value,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("saveInitials", JSON.stringify(saveInitials));
  }

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*---------SAVING SCORE?-WIP--------------------------------------------------------------------------------------------------------------------*/
function showScores() {
    var score = JSON.parse(localStorage.getItem("timeScore"))
}




/*----------TIMER   WIP-------------------------------------------------------------------------------------------------------------------------------------*/
/*SEE 10, COUNT DOWN IS WORKING*/
function timerNumber() {
    var timeLeft = 61;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timeCount.textContent = timeLeft;
        
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        /*go to score screen */
        }
        //else if { //question numer is great than 20, go to scoreboard*/
        //    localStorage.getItem(timeLeft)
    //}
    }, 1000);
  }
timerNumber()
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/





// event listener for game start
startButton.addEventListener("click", runGame);


// localStorage.setItem("time", value)
// localStorage.getItem("time")
