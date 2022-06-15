// Assignment Code
var generateBtn = document.querySelector("#generate");

//Length of the password
function getLength(){
  var numCharacters = window.prompt("How many charaacters in your PASSWORD (8 - 28)");
  if (numCharacters < 128 && numCharacters > 8){
    return numCharacters;
  } else {
    getLength();
  }
}

//All Characters
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
var totalArray = [];

var numCharacters = getLength();
console.log(numCharacters); //shows as undefined if incorrect value written in before correct value

//Upper case selection
var selectUpper = window.confirm("Upper Case?");
if (selectUpper){
 totalArray = totalArray.concat(upperCase);
}
else{
  //pass
}

//Lower case selection
var selectLower = window.confirm("Lower Case?");
if (selectLower){
  totalArray = totalArray.concat(lowerCase);
 }
 else{
   //pass
 }

//Number selection
var selectNum = window.confirm("Numbers?");
if (selectNum){
  totalArray = totalArray.concat(numberAll);
 }
 else{
   //pass
 }
//Special Character selection
var selectSpecial = window.confirm("Special Characters?");
if (selectSpecial){
  totalArray = totalArray.concat(specialCharacter);
 }
 else{
   //pass
 }

console.log(totalArray);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
