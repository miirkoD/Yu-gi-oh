var params = window.location.search;
var urlParams = new URLSearchParams(params);
//import { user } from 'script.js'

//dodeljivanje vrednosti
var submitButton = document.getElementById("submit");
var usernameField = document.getElementById("username");
var passwordField = document.getElementById('password');
var nameField = document.getElementById("name");
var surnameField = document.getElementById("surname")

var number = document.getElementById("number");
var length = document.getElementById("length");

var reg_user = [{
    name: urlParams.get("name"),
    surname: urlParams.get("surname"),
    username: urlParams.get("username"),
    password: urlParams.get("password")
}]


//ako je username i password ipunjen submit je omogucen
usernameField.addEventListener("change", () => {
    if (usernameExist(usernameField.value) || isPasswordValid(passwordField.value) & nameField != null & surnameField != null)
        submitButton.disabled = true;
    else submitButton.disabled = false;
})


function isPasswordValid(password) {

    return false;

}

function dodajUlistu() {
    var a = {
        name: urlParams.get("name"),
        surname: urlParams.get("surname"),
        username: urlParams.get("username"),
        password: urlParams.get("password"),
    }
    reg_user.push(a);
}


function usernameExist(username) {
    var exist = false;
    user.forEach((el, index) => {
        if (el.name == username) {
            exist = true;
            var existitem = document.createElement("p");
            existitem.innerText = user.name + "vec postoji";
            container.append(existitem);
        } else {
            dodajUlistu();
            localStorage.setItem('users', JSON.stringify(reg_user));

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

/*  
lista.forEach

Items.forEach((el) => {
            KreirajElement(el); kreirajel funkcija
        });

        function KreirajElement(el) {
            var newItem = document.createElement("p"); kreira se paragraf
            newItem.innerText = "Elemenet sa podacima:" + el.id + "" + el.name;
            container.append(newItem);
        }

        function Dodajelement() {
           
            var a = {
                id: document.getElementById("newId").value,
                name: document.getElementById("newName").value
            };
            Items.push(a);
            KreirajElement(a);
        }
 */