//this is the function to generate the password
function generatePassword(){

    //The variables needed to generate the random charactors
    var userPassword = ''
    var userPasswordChoices = 0;
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
    while (userPasswordChoices == 0){
    var lowerCase = confirm("Do you want lower case letters in your password?");
    if(lowerCase == true){
        userPassword = userPassword + lowerCaseLetter;
        userPasswordChoices++;
        
    }
    var upperCase = confirm("Do you want upper case letters in your password?");
    if(upperCase == true){
        userPassword = userPassword + upperCaseLetter;
        userPasswordChoices++;
        
    }
    var numbers = confirm("Do you want numbers in your password?");
    if(numbers == true){
        userPassword = userPassword + passwordNumber;
        userPasswordChoices++;
        
    }
    var special = confirm("Do you want special characters letters in your password?");
    if(special == true){
        userPassword = userPassword + passwordSpecial;
        userPasswordChoices++;
    }else{ alert("Please pick at least two")}
    console.log(userPassword);
}

}
//need an alert that would prompt the user if they(continuation to next line)
//would like to have certain charactor. Minimum of one charactor must be chosen.
//bonus copy to clipboard