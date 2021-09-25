// QUESTION AND ANSWER ARRAYS
var questionArray01 = ["1.  What color is Garfield?", ["Orange", "White", "Grey", "Blue"]]; //  1
var questionArray02 = ["2.  What is Garfield’s favorite food?", ["Tuna", "Purina", "Lasagna", "Pizza"]]; //  3
var questionArray03 = ["3.  What day does Garfield hate?", ["Wednesdays", "Mondays", "Fridays", "Sundays"]]; //  2
var questionArray04 = ["4.  Who is Garfield’s dog friend?", ["Clive", "Frank", "Odie", "Hale"]]; //  1
var questionArray05 = ["5.  What kind of dog is Odie?", ["Chihuahua", "German Shepherd", "Labrador", "Beagle"]]; //  4
var questionArray06 = ["6.  Who is Garfield’s owner?", ["Jon Arbuckle", "Lyman Turner", "Jack Sandman", "Al Murray"]]; //  1
var questionArray08 = ["8.  What is the name of Garfield’s teddy bear?", ["Teddy", "Billy", "Pooky", "Harry"]]; //  3
var questionArray09 = ["9.  Which number is Garfield thinking of right now?", ["3", "63", "92", "Lasagna"]]; //   4
var questionArray10 = ["10. Who is Garfield’s vet?", ["Dr. Julie Payne", "Dr. Liz Wilson", "Dr. Joanna Cauldron", "Dr. Vanessa Marshall"]]; //  2
var questionArray11 = ["11. Who is Garfield’s nemesis?", ["Nermal", "Arlene", "Odie", "Dr. Liz Wilson"]]; //  1
var questionArray12 = ["12. What color is Nermal?", ["Pink", "Grey", "White", "Calico"]]; //  2
var questionArray13 = ["13. How many live-action Garfield movies are there?", ["1", "2", "3", "4"]]; //  2
var questionArray14 = ["14. How many panels are in a normal Garfield strip?", ["3", "4", "5", "6"]]; //  1
var questionArray15 = ["15. How many panels are in a Sunday Garfield strip? (Not including the header panel)", ["6", "7", "8", "9"]]; //  2
var questionArray16 = ["16. How old is Garfield in real-world years?", ["24", "36", "43", "48"]]; //  3
var questionArray17 = ["17. Which cat has a crush on Garfield?", ["Arlene", "Fluffy", "Ivy", "Abigail"]]; //  1
var questionArray18 = ["18. What color is Arlene?", ["Grey", "White", "Calico", "Pink"]]; //  4
var questionArray19 = ["19.  Can Jon understand what Garfield says?", ["Yes", "No", "Sometimes", "It's not canonically defined"]]; //  2
var questionArray20 = ["20. What has Garfield given up on?", ["Mousing", "Mondays", "Diets", "All of the above"]]; //  4
var questionArray21 = ["21. Why does Garfield hate Mondays???? Garfield is a cat. Every day is the same for him.", ["I know, right?", "I know, right?", "I know, right?", "I know, right?"]];  // 5

var answerKeyArray = ["1", "3", "2", "1", "4", "1", "3", "4", "2", "1", "2", "2", "1", "2", "3", "1", "4", "5", "4", "1"]; //  
var answerKeyArray2d = ["0", "2", "1", "0", "3", "0", "2", "3", "1", "0", "1", "1", "0", "1", "2", "0", "3", "1", "3", "5"]; //  

var answerKeyArrayLength = 0;
answerKeyArrayLength = answerKeyArray.length;

console.log(questionArray01.length);
console.log(questionArray02.length);
console.log(questionArray03.length);
console.log(questionArray04.length);
console.log(questionArray05.length);
console.log(questionArray06.length);
console.log(questionArray08.length);
console.log(questionArray09.length);
console.log(questionArray10.length);
console.log(questionArray11.length);
console.log(questionArray12.length);
console.log(questionArray13.length);
console.log(questionArray14.length);
console.log(questionArray15.length);
console.log(questionArray16.length);
console.log(questionArray17.length);
console.log(questionArray18.length);
console.log(questionArray19.length);
console.log(questionArray20.length);
console.log(questionArray21.length);
console.log(answerKeyArray.length);
console.log(answerKeyArray);
console.log(answerKeyArray2);

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4

// for each, let array point 0 be the question
// for each let 1 be 1, 2 be 2....
// corerct answer is is