// Assignment Code from HTML

var generateBtn = document.querySelector("#generate");
var numberCheckbox = document.querySelector("#wantsnumber");
var uppercaseCheckbox = document.querySelector("#wantsUppercase");
var lowercaseCheckbox = document.querySelector("#wantsLowercase");
var specialCheckbox = document.querySelector("#wantsSpecialCharacters");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to Checkboxes
numberCheckbox.addEventListener("click", randomLowerLetter);
uppercaseCheckbox.addEventListener("click", randomUppercase);
lowercaseCheckbox.addEventListener("click", randomLowercase);
specialCheckbox.addEventListener("click", randomSpecial);

// Variables used in Passwords

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var specialCharacters = ['@', '"', '/', '[', ']', '{', '}', '|', '!', '#', '$', '%', '^', '&', '*', '_', '~', '-', '?', '<', '>'];

// Combines all password variables into one array

var allCharacters = lowerLetters.concat(upperLetters, numbers, specialCharacters);

console.log(allCharacters);

// Determines what arrays to use based on what is checked

function
//  Returns Random Lower Case Letter

function randomLowerLetter() {
  return String.lowerLetters(Math.floor(Math.random()* 26));
}
console.log(randomLowerLetter);


//  Generate password after all inputs from user

function generatePassword() {
  
  console.log("Generate Password");

  return "random password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

