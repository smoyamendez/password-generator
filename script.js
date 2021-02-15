// Assignment Code from HTML

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  Generate password after all inputs from user
function getRandom (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
  }
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
  
  // variable for the length of password
  var passwordLength = document.querySelector("#lengthInput").value;

  // Blank variable to collect all of user's inputs
  var userInput = [];

  console.log(passwordLength);
  
  // Adding alerts if user input number < 8 or > 128

  if (passwordLength < 8) {
    alert("Password must be at least 8 characters in length.");
    return "";
  }

  if (passwordLength > 128) {
    alert("Password must not be more than 128 characters in length.");
    return "";
  }

  // Function for random index of array

  
  // Adds arrays of characters based on what is checked by user to the userInput variable

  if (numberCheckbox.checked) {
    userInput.push(numbers);
  }
  if (uppercaseCheckbox.checked) {
    userInput.push(upperLetters);
  }
  if (lowercaseCheckbox.checked) {
    userInput.push(lowerLetters);
  }
  if (specialCheckbox.checked) {
    userInput.push(specialCharacters);
  }
  
  console.log(userInput);
  
  var finalPassword = [];
 
  for (var i = 0; i < passwordLength; i++) {
    var arr = userInput[Math.floor(Math.random()*userInput.length)];
    var char = getRandom(arr);
    finalPassword.push(char);

  } 
  return finalPassword.join('');
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}