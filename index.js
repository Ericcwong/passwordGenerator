//The variables needed to generate the random charactors
    var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetter = lowerCaseLetter.toUpperCase();
    var passwordNumber = "0123456789";
    var passwordSpecial = "~!@#$%^&*()_+";

    var userPassword = ""; //This would be the end result of the password
    var passwordChoices = ""; //This is what the user has chosen and combines it into one variable
    
//The variables that calls the checkboxes
    var passwordLength = document.getElementById("inputPassLength");//Where the user inputs in the desired length

    var lowerCheckBox = document.getElementById("lowerCaseCheck");
    var upperCheckBox = document.getElementById("upperCaseCheck");
    var numberCheckBox= document.getElementById("numberCheck");
    var specialCheckBox = document.getElementById("specialCheck");

    var printPassword = document.getElementById("password");//
    var generatePassword = document.getElementById("generateBtn");
//When the variables are called function is ran to add what they checked to the variable passwordChoices
    lowerCheckBox.addEventListener("change",function(event){
        if(event.target.checked){
        passwordChoices = passwordChoices + lowerCaseLetter;
        }
    });
    upperCheckBox.addEventListener("change",function(event){
        if(event.target.checked){
        passwordChoices = passwordChoices + upperCaseLetter;
        }
    });
    numberCheckBox.addEventListener("change",function(event){
        if(event.target.checked){
        passwordChoices = passwordChoices + passwordNumber;
        }
    });
    specialCheckBox.addEventListener("change",function(event){
        if(event.target.checked){
        passwordChoices = passwordChoices + passwordSpecial;
        }
    });
 
    generatePassword.addEventListener("click",function(){
        const length = +passwordLength.value;
        console.log(length);
    });
