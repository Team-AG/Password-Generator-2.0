const allCharacters = [
    [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ],
    [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~"],
];

// Generate random password based on user specifications and print to screen
function GeneratePassword(options) {
    // Use destructuring to get the checkboxes' value
    const {
        confirmLowercase,
        confirmUppercase,
        confirmNumber,
        confirmSpecial,
    } = options;
    // Use concatenation to generate an array of possible characters for the password based on which checkboxes the user selected
    let passwordArray = [];

    if (
        case) {
        passwordArray = passwordArray.concat(allCharacters[0]);
    }

    if (confirmUpper) {
        passwordArray = passwordArray.concat(allCharacters[1]);
    }

    if (confirmNumber) {
        passwordArray = passwordArray.concat(allCharacters[2]);
    }

    if (confirmSpecial) {
        passwordArray = passwordArray.concat(allCharacters[3]);
    }

    // Use a loop to randomly select a character from the passwordArray and add it to the finalPassword until finalPassword reaches the length specified by the user
    const passwordLength = document.getElementById("passwordLength");

    let finalPassword = "";

    for (var i = 1; i <= passwordLength.value; i++) {
        const newCharacter =
            passwordArray[Math.floor(Math.random() * passwordArray.length)];
        finalPassword = finalPassword.concat(newCharacter);
    }

    // Print finalPassword to screen
    const passwordDisplay = document.getElementById("displayBox");

    passwordDisplay.innerText = finalPassword;

    // Turn "Copy to Clipboard" button purple and create hover effect
    const purpleButton = document.getElementById("copyToClipboard");
    purpleButton.setAttribute("style", "background-color: var(--mainColor);");
    purpleButton.onmouseover = function() {
        purpleButton.setAttribute("style", "background-color: var(--darkColor);");
    };
    purpleButton.onmouseout = function() {
        purpleButton.setAttribute("style", "background-color: var(--mainColor);");
    };
}

// Check whether user checked at least one checkbox; If not, alert and prevent further action. If they did it correctly, proceed with generating a password.
function checkboxError() {
    const
    case = document.getElementById("case").checked;

    const confirmUpper = document.getElementById("confirmUpper").checked;

    const confirmNumber = document.getElementById("confirmNumber").checked;

    const confirmSpecial = document.getElementById("confirmSpecial").checked;

    if (
        case ===false &&
        confirmUpper === false &&
        confirmNumber === false &&
        confirmSpecial === false
    ) {
        alert("Error: Must select at least one type of character.");
    } else {
        GeneratePassword({
            case,
            confirmNumber,
            confirmSpecial,
            confirmUpper,
        });
    }
}

// When user clicks Generate Password button, check whether user entered a number between 8 and 128 for password length; If not, error alert and prevent further action. If they did it correctly, proceed to checkbox error check.
function lengthError() {
    const passwordLength = document.getElementById("passwordLength");
    if (
        passwordLength.value < 8 ||
        passwordLength.value > 128 ||
        isNaN(passwordLength.value)
    ) {
        alert("Error: Password must have between 8 and 128 characters.");
    } else {
        checkboxError();
    }
}

// Add event for user clicking "Generate Password" button
document
    .getElementById("generatePassword")
    .addEventListener("click", lengthError);












// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}

/* Optional: Add active class to the current button (highlight it) */
var containertainer = document.getElementById("btncontainertainer");
var btns = containertainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
var elements = document.getElementsByClassName("column");