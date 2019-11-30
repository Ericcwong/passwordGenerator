//this is the function to generate the password
function generatePassword(){

    //The variables needed to generate the random charactors
    var userPassword = 0
    var lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz';
    var upperCaseLetter = lowerCaseLetter.toUpperCase();
    var passwordNumber = '0123456789';
    var passwordSpecial = '~!@#$%^&*()_+';
    var passwordLength = null;
    //Minimum requirement character needed for the password length
    while (passwordLength == null){
        var passwordLength = prompt("Enter an desired number of charactor you want your password to be.","8 to 128 characters");
        passwordLength == Number(passwordLength);
        if (passwordLength < 8 || passwordLength > 128){
            alert("Please enter a password that is between 8 to 128 charactors.");
            passwordLength = null;
        }
    }
    // The option for the user to choose if they would want lower case letters 
    while ( = 0){
        var lowerCaseLetter = confirm("Do you want lower case letters in your password?");
        if(lowerCaseLetter == true){
            userPassword = userPassword + lowerCaseLetter;
        }
        
    }

}


//need an alert that would prompt the user if they(continuation to next line)
//would like to have certain charactor. Minimum of one charactor must be chosen.

//bonus copy to a clipboard
