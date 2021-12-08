// Assignment Code
var generateBtn = document.querySelector("#generate");
 //establish global objects
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = lower.map.toUpperCase
var number = [0,1,2,3,4,5,6,7,8,9]
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "'", "+", ",", "-", ".", "/", ":", ";", "<", "=", "[", "]", "\", "_", "{", "}", "|", "~""]
// password variable values are arrays
//confirm option variables
//password length is also defined
//
// if button is clicked then start password generator prompts
//password generator prompts launched by generatepassword function
// define empty array var choices = UI values
// var password (defined globally) = output in the html element
//start length prompt
// if it satisifies condition between 8 and 128 then estabilish length of password
// else return to beginning of function (call function again)
// if password length is estabilished then continue to next prompts
// window.confirm Upper
// if okay
//if confirmUpper
//choices.push()
//push array Upper into password
// if not
// if!confirmUpper then move on
// window.confirm Lower
// if okay
// if not
// window.confirm Number
// if okay
// if not
// window.confirm Character
// if okay
// if not
// take choices and put them in for loop
// math.floor/math.random
// take results of for loop and push into password array
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
