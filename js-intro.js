var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
// Intro to Javascript Assessments

Consider this variable:

var mantra = "Be the dev";

1. Write the code that returns 'B' from mantra.
function sentence(letter) {
  return "B";
}
console.log(sentence("mantra"));

2. Write the code that determines if there is a 'x' in mantra.
var mantra = "Be the dev";

  if (mantra (letter) === "x") {
    return "XXXX"
  } else {
    return "Not X"
  }
}
// console.log(mantra("j"))

// 3. Write the code that determines if there is a 'v' in mantra.
function mantra(letter){
  if (mantra === "V")
  return "There is a V"
}else{
  return "No V"
}
console.log(mantra("V"))

// Stretch: Write the code that returns the position of 'v' in mantra.

// Consider the following statement:

var codingIsEasy;
var imBored;

if (codingIsEasy && imBored) {
  console.log("I need more!");
} else {
  console.log("Steady as she goes");
}

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost;
var imFrustrated;

if (imLost || imFrustrated) {
  console.log("Break time!");
} else {
  console.log("Keep coding!");
}

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

// Stretch: Using a while loop.

// Super Stretch: Using forEach().

// Consider the following variable:

var message = "thisisateststring";

// 7. Write a function that takes a string like message as an argument and returns the string without vowels.

// Stretch: Update your function to throw an exception if the argument is not a string.

// Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.

// Consider the following variable:

var toonimals = [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" }
];

// 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
