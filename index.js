//The variables needed to generate the random charactors
    const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseLetter = lowerCaseLetter.toUpperCase();
    var passwordNumber = "0123456789";
    var passwordSpecial = "~!@#$%^&*()_+";

    var userPassword = ""; //This would be the end result of the password
    var passwordChoices = ""; //This is what the user has chosen and combines it into one variable
    
    var printPassword = document.getElementById("password");//
    var generatePassword = document.getElementById("generateBtn");
    var clipBoardBtn = document.getElementById("copy");
    var copyText = document.getElementById("password");
   
//When generatePassword is clicked it would have to run through the variables to check if the checked boxes are checked or not.
    generatePassword.addEventListener("click", function(){
        var userPassword = "";
        var passwordChoices = "";
//This pulls in the ids from the dom
        var passwordLength = document.getElementById("inputPassLength").value;//Where the user inputs in the desired length
        var lowerCheckBox = document.getElementById("lowerCaseCheck").checked;
        var upperCheckBox = document.getElementById("upperCaseCheck").checked;
        var numberCheckBox= document.getElementById("numberCheck").checked;
        var specialCheckBox = document.getElementById("specialCheck").checked;
 //This stop the code when the user chooses a length outside of 8 to 128       
            if(passwordLength < 8 || passwordLength > 128){
                alert("Please choose a length of 8 to 128.");
                return generatePassword
            }
//This will stop the code from running if the user has selected nothing for the password
            if( lowerCheckBox === false, 
                upperCheckBox === false,
                numberCheckBox === false,
                specialCheckBox === false
                    ){alert("Please choose at least one selector.")
                    return generatePassword}
//Checks if the checkboxes are true
            if (lowerCheckBox === true){
                passwordChoices = passwordChoices + lowerCaseLetter;
            }
            if (upperCheckBox === true){
                passwordChoices = passwordChoices + upperCaseLetter;
            }
            if (numberCheckBox === true){
                passwordChoices = passwordChoices + passwordNumber;
            }
            if (specialCheckBox === true){
                passwordChoices = passwordChoices + passwordSpecial;
            }

            for(i=0; i<passwordLength; i++){
                userPassword += passwordChoices.charAt(Math.floor(Math.random() * passwordChoices.length));
            }
            

            console.log(lowerCheckBox,upperCheckBox,numberCheckBox,specialCheckBox);
            console.log(passwordChoices);
            console.log(userPassword);
            printPassword.textContent = userPassword;
    });
//copies the password to clipboard
    clipBoardBtn.addEventListener("click", function(){
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Password has been added to the clipboard! " + copyText.value);
      
    });
   

