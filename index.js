//this is the function to generate the password
function generatePassword(randomPassword){

    //The variables needed to generate the random charactors
    var userPassword = ''
    var passwordChoiceCounter = 0;
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
    while (passwordChoiceCounter == 0){
    var lowerCase = confirm("Do you want lower case letters in your password?");
    if(lowerCase == true){
        userPassword = userPassword + lowerCaseLetter;
        //passwordChoiceCounter++ is making it so if the user is to choose just one it will still be greater than 0
        userPasswordChoicecounter++;
        
    }
    var upperCase = confirm("Do you want upper case letters in your password?");
    if(upperCase == true){
        userPassword = userPassword + upperCaseLetter;
        passwordChoiceCounter++;
        
    }
    var numbers = confirm("Do you want numbers in your password?");
    if(numbers == true){
        userPassword = userPassword + passwordNumber;
        passwordChoiceCounter++;
        
    }
    var special = confirm("Do you want special characters letters in your password?");
    if(special == true){
        userPassword = userPassword + passwordSpecial;
        passwordChoiceCounter++;
    }
    if(passwordChoiceCounter ==0) alert("Please pick at least one option.");
    console.log(userPassword);
    for(var i = 0; i < passwordLength; i++ ){
        UserPass += charPool.charAt(Math.floor(Math.random() * charPool.length))

    }
}

}
//need an alert that would prompt the user if they(continuation to next line)
//would like to have certain charactor. Minimum of one charactor must be chosen.
//bonus copy to clipboard