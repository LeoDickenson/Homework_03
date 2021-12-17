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
  var numPrompt = confirm("Should your password include numbers?");
  var specPrompt = confirm("Should your password include special characters?");
  var specialChar = ["`","~","!","@","#","$","$","%","^","&","*","(",")","-","_","=","-","[","{","]","}",";",":","'",",","<",".",">","/","?","|",];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericChar = ["0","1","2","3","4","5","6","7","8","9"];


  
  //based on user confirmation pick the correct arrays and concatenate them and store that concat array in new    variable
  //loop num times
  //generate random num for concat array and grab the item
  //push that item in new password array
  // return new password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);