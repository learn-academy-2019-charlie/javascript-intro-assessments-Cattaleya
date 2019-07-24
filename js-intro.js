
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

function letter(str){
 if (str.includes('v')){
 return "has v"
 }else{ 
 return 'no v'
 }
}
console.log(letter(mantra))

// Stretch: Write the code that returns the position of 'v' in mantra.
var mantra = "Be the dev";


// Consider the following statement:

function position (str){
    let newArr = str.indexOf("v")
    return newArr 
}
console.log(position(mantra))

//Consider the following statement:


var codingIsEasy = true
var imBored = true

function work (value){
  if (codingIsEasy, imBored) {
    return 'I need more!'
  } else {
    return 'Steady as she goes'
  }    
}
console.log(work(codingIsEasy, imBored))

// 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"

// Consider the following statement:

var imLost = true
var imFrustrated = false

function stress(){
  if (imLost || imFrustrated) {
      return 'Break time!'
  } else {
      return 'Keep coding!'
  }
}
console.log (stress(imLost, imFrustrated))

// 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"

// 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.

var mantra = "Be the dev"

 
     var newArr = mantra.split("")
    for (let i=0; i < newArr.length ; i++){
        console.log (newArr[i])
    }

// Stretch: Using a while loop.

// Super Stretch: Using forEach().

// Consider the following variable:

var message = "thisisateststring";

// // 7. Write a function that takes a string like message as an argument and returns the string without vowels.
function noVowels (str){
    return str.replace (/[aeiou]/gi,"")
}
console.log (noVowels(message))

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

// // 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.

function onlyCat (arr){
    let  newArr = []
    for(let i =0 ; i < arr.length; i ++){
        if (arr[i].animal ==="cat" ) 
        newArr.push(arr[i])
    }
    return newArr 
}
console.log (onlyCat (toonimals))
