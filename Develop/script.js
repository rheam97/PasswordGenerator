var generateBtn = document.querySelector("#generate");
//establish global objects
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = lower.map(lower => lower.toUpperCase())
var number = [0,1,2,3,4,5,6,7,8,9]
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//generate randomized string values from arrays, help explaining 0???
var rmLower= lower[(Math.random()*lower.length)|0]
var rmUpper= upper[(Math.random()*upper.length)|0]
var rmNumber= number[(Math.random()*number.length)|0]
var rmCharacter= character[(Math.random()*character.length)|0]
//password length is also defined
var length =""

function generatePassword () {
// define empty generated password array for for loop 
  const genpassword =[]
  console.log(genpassword)
  if (generateBtn) {
    length= prompt("How long do you want your password to be? You must pick a number between 8 and 128.");
// if length is not a number
    if (isNaN(length)) {
      alert("You must input a numeric amount between 8 and 128.")
      generatePassword()
    } // if length does not fit numeric range
    else if(length<8 || length>128) {
      alert("Your numeric input must be between 8 and 128.")
      generatePassword()
    }// if length satsifies range, launch confirms
    else (8<=length<=128);
      // length must determine length of pw, store somewhere (in for loop?)
      //confirm option variables
      confirmLower= confirm("Would you like lowercase letters?")
      confirmUpper= confirm("Would you like uppercase letters?")
      confirmNumber= confirm("Would you like numbers?")
      confirmCharacter=confirm("Would you like special characters?")
    };
    // if they want lower case, push rmlower string value into genpassword
      if(confirmLower) {
        genpassword.push(rmLower)
      }
    // if they want upper case, push rmupper string value into genpassword
      if(confirmUpper) {
        genpassword.push(rmUpper)
      }
    // if they want numbers, push rmnumber string value into genpassword
      if(confirmNumber) {
        genpassword.push(rmNumber)
      }
    // if they want characters, push rmcharacter value into genpassword
      if(confirmCharacter) {
        genpassword.push(rmCharacter)
      }

// password array is an intermediate placeholder for user generated amount of length from for loop
var passwordarray=[]

// take genpassword and put it in for loop to make it the UI length
for (var i=0; i<length; i++) {
  var pickpassword = genpassword[Math.floor(Math.random()*genpassword.length)]
  // take results of for loop and push into password array
  passwordarray.push(pickpassword)
  console.log(passwordarray)
}

var wp = passwordarray.join("")

};

//turn password into string



// Write password to the #password input havign issues here**** because of wp
function writePassword() {
  document.getElementById("#password").textContent = wp;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


