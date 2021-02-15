// Assignment Code from HTML

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  Generate password after all inputs from user

function generatePassword() {
  
  // All character variables
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
  var specialCharacters = ['@', '"', '/', '[', ']', '{', '}', '|', '!', '#', '$', '%', '^', '&', '*', '_', '~', '-', '?', '<', '>'];
  
  // Checkbox Variables

  var numberCheckbox = document.querySelector("#wantsNumbers");
  var uppercaseCheckbox = document.querySelector("#wantsUppercase");
  var lowercaseCheckbox = document.querySelector("#wantsLowercase");
  var specialCheckbox = document.querySelector("#wantsSpecialCharacters");

  // Blank variable to collect all of user's inputs

  var userInput = "";

  // Function for random index of array
  function getRandom (array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomCharacter = array[randomIndex];
    return randomCharacter;
  }

  // variable for the length of password
  var passwordLength = document.querySelector("#lengthInput").value;
  
  console.log(passwordLength);
  
  // Adding alerts if user input number < 8 or > 128

  if (passwordLength < 8) {
    alert("Password must be at least 8 characters in length.");
  }

  if (passwordLength > 128) {
    alert("Password must not be more than 128 characters in length.");
  }

  // Adds arrays of characters based on what is checked by user to the userInput variable

  if (numberCheckbox.checked) {
    userInput = userInput.concat(numbers);
  }
  if (uppercaseCheckbox.checked) {
    userInput = userInput.concat(upperLetters);
  }
  if (lowercaseCheckbox.checked) {
    userInput = userInput.concat(lowerLetters);
  }
  if (specialCheckbox.checked) {
    userInput = userInput.concat(specialCharacters);
  }
  
  console.log(userInput);
  
  var finalPassword = function {
    getRandom (userInput) * passwordLength;
  }

 return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}