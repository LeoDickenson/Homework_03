// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var numOfChar = prompt("enter the length of password");
   if (!(numOfChar >= 8 && numOfChar < 128)) {
   return(alert("You must enter a value between 8 and 128!"));
   }
  var lowPrompt = confirm("Should your password contain lowercase?");
  var upPrompt = confirm("Should your password include uppercase?");
  var numPrompt = confirm("Should your password include numbers?")
  var specPrompt = confirm("Should your password include special characters?") 
  //add "prompt function" for userInput for num of char in password
  // 8>=num<128
  //userInput confirmation for numeric, lowercase, uppercase, special (separately)
  //save those confirmations in separate variables
  // store all the values in form of arrays
  // var numeric = [0,1,2,3...]
  //based on user confirmation pick the correct arrays and concatenate them and store that concat array in new    variable
  //loop num times
  //generate random num for concat array and grab the item
  //push that item in new password array
  // return new password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);