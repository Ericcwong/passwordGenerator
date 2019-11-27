//this is the function to generate the password
function generatePassword(){

    //The variables needed to generate the random charactors
    var passwordLength = null;
    var lowerCaseLetter = ['abcdefghijklmnopqrstuvwxyz'];
    var upperCaseLetter = lowerCaseLetter.toUpperCase();
    var passwordNumber = ['0123456789'];
    var passwordSpecial = ['~!@#$%^&*()_+'];

    //Minimum requirement needed for the password length
    while (passwordLength == null){
    var passwordLength = prompt("Enter desired number of charactor you want your password to be.");
    passwordLength ==Number(passwordLength);
    if (passwordLength < 8 || passwordLenth > 128){
        alert("Please enter a password that is between 8 to 128 charactors.");
        }
    }
}


//need an alert that would prompt the user if they(continuation to next line)
//would like to have certain charactor. Minimum of one charactor must be chosen.

//bonus copy to a clipboard
