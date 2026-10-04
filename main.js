const input = require('readline-sync');

let newPassword;
let isValid = false;

do {
    newPassword = input.question("Enter your new password here: ");

    let hasUppercase = false;
    let hasNumber = false;

    for (const char of newPassword) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            hasUppercase = true;
        }
        if (char >= "0" && char <= "9") {
            hasNumber = true;
        }
    }

    if (newPassword.length >= 8 && hasUppercase && hasNumber) {
        isValid = true;
        console.log("Your password is valid!");
    } else {
        console.log("Your password is invalid :(");
    }
} while (!isValid);