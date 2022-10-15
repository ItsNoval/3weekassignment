// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
const charsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const charsUpperCase = ["A" , "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const charsNumbers = ["1", "2" , "3", "4", "5", "6", "7", "8", "9", "0"]
const charsSpecial = ["!", ".", "?", ",", " ", "&", "*", "£", "$"]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  function generatePassword(){
    let passwordLength = prompt("Enter the number of characters you would like your password to be:") //gives the user a prompt window so they can choose a length for theie password
    if (passwordLength < 8 || 128 < passwordLength){ //this makes the password between 8and 128 characters long
      window.alert("That character length isn't allowed")
    }
    let upperCase = confirm("Would you like to include upper case letters in your password?") //gives a confirm box for the optional characters
    /*
    if (upperCase === true){
         console.log("hello")    this confirms if that confirm window works
    }*/
      let numbers = confirm("Would you like to include numbers in your password?")
      let special = confirm("Would you like to include special characters in your password?")
    
    for (let i = 0; i < passwordLength; i++) {
       var configPassword = Math.floor(Math.random() * charsLowerCase.length); //the random character generation for the lower case 
       
    }
    console.log(configPassword)
  } 
  

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
