// javaScript cheat sheet for week 2 Homework

//vvvvv examples of Variables vvvvv

var n = 200;
//"n" is 200 where "=" is the assignment operator
n === 200;
/*"n" IS EQUAL TO 200 (which would equate to 'false') 
	"==" checks for same value
	"===" checks for same data type
	5 == "5" is true ; 5 === "5" is false */

===================================================================

//vvvvv examples of "debugging" (alerts, comments, the console) vvvvv

alert("Hello World"); //Will create "pop-up" That simply says "Hello World" 
/* Keyan has a list of every developer that has used an alert
	in a professional project.*/


// EXAMPLE OF A ONE LINE COMMENT ([highlight + cmd + /] one-line comments each line)

/* EXAMPLE OF A
	MULTI-LINE COMMENT*/

// The console is like a playground for javaScript - load up a project in
// the browser( [ cmd + opt + j ] opens the console )
// The code for the webpage you're viewing can be reached that way!!
//Great way to test your code

===================================================================

//vvvvv examples of data types vvvvvv

var length = 16; //number
var lastName = "Johnson"; //string
var cars = ["Saab", "Volvo", "BMW"]; //array - cars[1] === "Volvo"
var x = {firstName: "John", lastName: Doe}; //object - x.firstname === "John"

===================================================================

//vvvvv examples of "testing" (if/else conditionals) 

var x = 10;

if(x == 10){		// tests for "truthiness"
	return true 	// executes this command if true
} else{				//Test for  3 or more conditions with "else if(...)"
	return false	// executes "default" command if no specified conditions are met
};

===================================================================

//vvvvv examples of "logic" (for/ while loops) vvvvv

var colors = ["blue" , "green" , "white" , "gold" , "black"];

for (i = 0; i < colors.length; i++){
	console.log(colors[i]);
};

/* "for a variable(i) that equals a value(0); as long as it is less than the length
of colors(in this case an array); increase i by one"*/

// i += 2 will increment i by 2 (or by the number specified)

while (i < 10){
	return i + " is less than 10!";
	i++;
}

// "while i is less than 10 , return a string that states the number (i) is less than 10"
// "increase i by one, running the code until i is no longer a number less than 10."

===================================================================

//vvvvv examples of functions vvvvv  -

function myFunction(p1 , p2){	// myFunction(4,6); will multiply 4 and 6 and return the result
	return p1 * p2;
}

var plus = function(x , y){  // plus(5,2); will add 5 and 2 and return the result
	console.log(x + y);
}

function combineStrings(a , b){ // combineStrings("hello","world"); will create an alert
	alert(a + " " + b);			// that says "Hello World
}

===================================================================

//vvvvv Scopes vvvvv

//Global Scope - variables defined in the global scope can be referenced anywhere in the script

//Function scope - variables defined in functions can only be referenced in that function

===================================================================

//vvvvv wk 2 day 1 homework vvvvv

// part 1 #1
var add = function(x , y){
	console.log( x + y);
}

var subtraction = function( a , b){
	console.log( a - b);
}

function( d , p){
	console.log( a + " and" + z + " are best friends")
}

//part 2 #1

var one = 1
var two = 2
 one + two // will return 3

var a = "string a"
var b + " string b"
 a + b //will return "string a string b"

// #3

if(v < 10){
	alert('your variable was less than 10');
} else{
	console.log( v + "is greater than 10")
}

// #5

var sentence = "This is a sentence"
	if(sentence === "This is a sentence"){
		console.log("It's a match!");
	}else{
	 console.log("It's not a match.");
	}

// #7 
var status = "done"

var hw = function(){
	console.log("my homework is " + status + "!");
}

hw(status) // will return "my homework is done!"



