// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  //everything above this is prewritten text

  //these next several lines set up the initial variables of the max and min password length, and the characters available
  var maxpasswordlen = 128;
  var minpasswordlen = 8; 
  var upperletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var nums = [1,2,3,4,5,6,7,8,9,0];
  var chars = ["!","@","#","$","%","^","&","*","-","+"];

  

  var possible_char = [];
  //var pword = [];

  // These next four lines let the user input what types of characters they want in their password
  var ynnumbers = window.confirm("Would you like to use numbers in this password? Press the OK button for Yes, or press the Cancel Button for No.");
  var ynlower = window.confirm("Would you like to use lowercase letters in this password? Press the OK button for Yes, or press the Cancel Button for No.");
  var ynuppercase = window.confirm("Would you like to use uppercase letters in this password? Press the OK button for Yes, or press the Cancel Button for No.");
  var ynchar = window.confirm("Would you like to use special characters in this password? Press the OK button for Yes, or press the Cancel Button for No.");

  var validationarray = [];

  if (ynnumbers == true) {
    possible_char.push(nums);
    validationarray.push("True");    
  }
  if (ynlower == true) {
    possible_char.push(lowerletters);
    validationarray.push("True");    
  }
  if (ynuppercase == true) {
    possible_char.push(upperletters);
    validationarray.push("True");   
  }
  if (ynchar == true) {
    possible_char.push(chars);
    validationarray.push("True");   
  }

  // This while loop checks the validation array to see if there is any value of "True" in it.
  // If there is not, then it will tell the user that they need to select at least one character type
  // After that, it will prompt the user and ask if what characters they will like to use again, and re-do the previous steps until at least 1 type is chosen

  while (!(validationarray.includes("True"))) {
    window.alert("You must have at least one character type")
    var ynnumbers = window.confirm("Would you like to use numbers in this password? Press the OK button for Yes, or press the Cancel Button for No.");
    var ynlower = window.confirm("Would you like to use lowercase letters in this password? Press the OK button for Yes, or press the Cancel Button for No.");
    var ynchar = window.confirm("Would you like to use special characters in this password? Press the OK button for Yes, or press the Cancel Button for No.");
    var ynuppercase = window.confirm("Would you like to use uppercase letters in this password? Press the OK button for Yes, or press the Cancel Button for No.");

    if (ynnumbers === true) {
      possible_char.push(nums);
      validationarray.push("True");
      console.log(validationarray)    
    }
    if (ynlower === true) {
      possible_char.push(lowerletters);
      validationarray.push("True");    
    }
    if (ynuppercase === true) {
      possible_char.push(upperletters);
      validationarray.push("True");   
    }
    if (ynchar === true) {
      possible_char.push(chars);
      validationarray.push("True");   
    }
  
  }

  // this code sets the max for the number of arrays that the random function will iterate through
  // EG. if only 1 character type is chose, it will only be able to randomly choose a character from 1 type  
  var maxlength = possible_char.length;
  
  // this code asks for the password length, then checks to see if it is in range. If it is not, it will ask again
  var passwordlength = Number(window.prompt("What is the length of your password? It must be an integer between 8 and 128"));
  while (passwordlength < minpasswordlen || passwordlength > maxpasswordlen) {
    var passwordlength = Number(window.prompt("Please input a new password length. It must be an integer between 8 and 128"));
  }

  function getrandomint (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
  }
  
  function newpassword () {
    var passwordarray = [];
    for (let i=0; i < passwordlength; i++) { // for the length of the password (each letter) it will go through this loop
      var random = getrandomint(0,maxlength); // this will pick a random type of character
      var random2 = getrandomint(0, possible_char[random].length); //this will pick an index for a random character
      passwordarray.push(possible_char[random][random2]); //this will append the password array with the new letter and it will do this for each loop
    }

    return passwordarray; //this will return an array, that can then be tested
  }

  // these next hasx functions loop through the password to see if it has x character type in it 
  function hasnums (passwordarray){
    let testarray = []
    for (let char=0; char < passwordarray.length; char++){
        testarray.push(nums.includes(passwordarray[char]));
      }
    if (testarray.includes(true)){
      return true;
    } else {
      return false;
    }
  }
  function hasupper (passwordarray){
    let testarray = []
    for (let char=0; char < passwordarray.length; char++){
        testarray.push(upperletters.includes(passwordarray[char]));
      }
    if (testarray.includes(true)){
      return true;
    } else {
      return false;
    }
  }
  function haslower (passwordarray){
    let testarray = []
    for (let char=0; char < passwordarray.length; char++) {
      testarray.push(lowerletters.includes(passwordarray[char]));
    }
    if (testarray.includes(true)){
      return true;
    } else {
      return false;
    }
  }
  function haschar (passwordarray){
    let testarray = []
    for (let char=0; char < passwordarray.length; char++){
      testarray.push(chars.includes(passwordarray[char]));
    }
    if (testarray.includes(true)){
      return true;
    } else {
      return false;
    }
  }
  
  
  // this code tests the password to see if it actually has       
   function haswantedchar (ynnumbers, ynuppercase, ynlower, ynchar, passwordarray) {
    wantedtestarray = []

    if(ynnumbers == true){
      if (!(hasnums(passwordarray))){
        newpassword();
      } else {
        wantedtestarray.push(true)
      }
    }
    if(ynlower == true){
      if (!(haslower(passwordarray))){
        newpassword();
      } else {
        wantedtestarray.push(true)
      }
    }
    if(ynchar == true){
      if (!(haschar(passwordarray))){
        newpassword();
      } else {
        wantedtestarray.push(true)
      }
    }
    if(ynuppercase == true){
      if (!(hasupper(passwordarray))){
        newpassword();
      } else {
        wantedtestarray.push(true)
      }
    }

    if(wantedtestarray.includes(true)){
      return passwordarray.join("")
    }

  }


  

  

  
  var passwordarray = newpassword(); 
  var password = haswantedchar(ynnumbers,ynuppercase,ynlower,ynchar, passwordarray);
  var passwordText = document.querySelector("#password");
  // everything below this is prewritten text 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

