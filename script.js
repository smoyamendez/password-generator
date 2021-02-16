// Assignment Code from HTML

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for random index of array
function getRandom (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
}

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
  
  // Array of all Checkboxes
  var allCheckbox = [numberCheckbox, uppercaseCheckbox, lowercaseCheckbox, specialCheckbox];
  
  // Blank variable to collect all of user's inputs
  var userInput = [];
  
  // variable for the length of password
  var passwordLength = document.querySelector("#lengthInput").value;

  // Adding alerts if user input number < 8 or > 128

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please input a password length between 8-128 Characters");
    return "";
  }


  // Adds arrays of characters based on what is checked by user to the userInput variable
  var yesNumbers = numberCheckbox.checked;
  var yesUppers = uppercaseCheckbox.checked;
  var yesLowers = lowercaseCheckbox.checked;
  var yesSpecials = specialCheckbox.checked;
  var allChecked = [yesLowers, yesNumbers, yesSpecials, yesUppers];

  if (yesNumbers) {
    userInput.push(numbers);
  } 
  if (yesUppers) {
    userInput.push(upperLetters);
  }
  if (yesLowers) {
    userInput.push(lowerLetters);
  }
  if (yesSpecials) {
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