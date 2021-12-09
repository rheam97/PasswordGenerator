var generateBtn = document.querySelector("#generate");
 //establish global objects
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = lower.map(lower => lower.toUpperCase())
var number = [0,1,2,3,4,5,6,7,8,9]
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  //generate randomized values for arrays?
var rmLower= lower[(Math.random()*lower.length)|0]
var rmUpper= upper[(Math.random()*upper.length)|0]
var rmNumber= number[(Math.random()*number.length)|0]
var rmCharacter= character[(Math.random()*character.length)|0]
//password length is also defined
var length =""
//
function generatePassword () {
// define empty array var choices = UI values
  const genpassword =[]
  console.log(genpassword)
  if (generateBtn) {
    length= parseInt(prompt("How long do you want your password to be? You must pick a number between 8 and 128."));

    if (isNaN(length)) {
      alert("You must input a numeric amount between 8 and 128.")
      generatePassword()
    }
    else if(length<8 || length>128) {
      alert("Your numeric input must be between 8 and 128.")
      generatePassword()
    }
    else (8<=length<=128);
      // length must determine length of pw, store somewhere (in for loop?)
      //confirm option variables
      confirmLower= confirm("Would you like lowercase letters?")
      confirmUpper= confirm("Would you like uppercase letters?")
      confirmNumber= confirm("Would you like numbers?")
      confirmCharacter=confirm("Would you like special characters?")
    };
  // if password length is estabilished then continue to next prompts
      if(confirmLower) {
        genpassword.push(rmLower)
      }

      if(confirmUpper) {
        genpassword.push(rmUpper)
      }

      if(confirmNumber) {
        genpassword.push(rmNumber)
      }

      if(confirmCharacter) {
        genpassword.push(rmCharacter)
      }
// take choices and put them in for loop
// math.floor/math.random
// take results of for loop and push into password array
 for (var i=0; i<length; i++) {

 }
};



// Write password to the #password input
function writePassword() {
    //turn the result into string ?
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);