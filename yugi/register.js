var params = window.location.search;
var urlParams = new URLSearchParams(params);
var user = {
    name: urlParams.get('name'),
    surname: urlParams.get('surname'),
    password: urlParams.get('password')
}

//dodeljivanje vrednosti
var submitButton = document.getElementById("submit");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById('password');
var nameField = document.getElementById("name");
var surnameField = document.getElementById("surname")

var number = document.getElementById("number");
var length = document.getElementById("length");


//ako je username i password ipunjen submit je omogucen
usernameField.addEventListener("change", () => {
    if (usernameExist(usernameField.value) || isPasswordValid(passwordField.value) & nameField != null & surnameField != null)
        submitButton.disabled = true;
    else submitButton.disabled = false;
})


function isPasswordValid(password) {

    return false;

}

function usernameExist(username) {
    var exist = false;
    Users.forEach((el, index) => {
        if (el.name == username) {
            exist = true;
        }
    });
    return exist;
}
/* provera lozinku da li ispunjava sve sto treba */

passwordField.onkeyup = function() {
    var numbers = /[0-9]/g;
    if (passwordField.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    var upperCaseLetters = /[A-Z]/g;
    if (passwordField.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    if (passwordField.value.length >= 7) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}