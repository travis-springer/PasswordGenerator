// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordString;

  //Reset variables for next run
  passwordString = ""
  numChar = 0;
  selections = 0;
  charSet = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numChar = 0;
var selections = 0;
var charSet = "";
var passwordString = ""

function generatePassword() {

  //Prompt for number of characters
  numCharPrompt();
  console.log(`Number of characters selected: ${numChar}`);

  //Prompt for character types
  charTypes();
  console.log(`Nubmer of selections: ${selections}`);
  console.log(`Selected characters: ${charSet}`);

  //Generate password string
  for (var i = 0, n = charSet.length; i < numChar; ++i) {
    passwordString += charSet.charAt(Math.floor(Math.random() * n));
  }
  console.log(passwordString);
}

//Prompt for number of characters
function numCharPrompt() {
  numChar = window.prompt("How many characters? (8-124)", 8);
  if (numChar >= 8 && numChar <= 128) {
    //Do nothing
  } else {
    window.alert("Please input a number between 8 and 128!");
    numCharPrompt();
  }
}

//Prompt for character types
function charTypes() {

  //Prompt for uppercase characters
  function upperCasePrompt() {
    var response = window.prompt("Include uppercase letters? Y/N", "Y");
    response = response.toUpperCase();
    if (response === "Y") {
      selections++;
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (response === "N") {
      //Do nothing
    } else {
      window.alert("Please input either Y or N");
      upperCasePrompt();
    }
  }

  //Prompt for lowercase characters
  function lowerCasePrompt() {
    var response = window.prompt("Include lowercase letters? Y/N", "Y");
    response = response.toUpperCase();
    if (response === "Y") {
      selections++;
      charSet += "abcdefghijklmnopqrstuvwxyz";
    } else if (response === "N") {
      //Do nothing
    } else {
      window.alert("Please input either Y or N");
      lowerCasePrompt();
    }
  }

  //Prompt for numbers
  function numbersPrompt() {
    var response = window.prompt("Include numbers? Y/N", "Y");
    response = response.toUpperCase();
    if (response === "Y") {
      selections++;
      charSet += "0123456789";
    } else if (response === "N") {
      //Do nothing
    } else {
      window.alert("Please input either Y or N");
      numbersPrompt();
    }
  }

  //Prompt for uppercase characters
  function specialCharPrompt() {
    var response = window.prompt("Include special characters? Y/N", "Y");
    response = response.toUpperCase();
    if (response === "Y") {
      selections++;
      charSet += "?<>!@#$%^&*()";
    } else if (response === "N") {
      //Do nothing
    } else {
      window.alert("Please input either Y or N");
      specialCharPrompt();
    }
  }

  //Run prompts
  upperCasePrompt();
  lowerCasePrompt();
  numbersPrompt();
  specialCharPrompt();

  //Check at least one option selected
  if (selections === 0) {
    window.alert("You must choose at least one of the options!");
    charTypes();
  }
}