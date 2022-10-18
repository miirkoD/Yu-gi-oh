var params = window.location.search;

var url = new URLSearchParams(params);
/* 
var user = [{
    name: url.get('name'),
    surname: url.get('surname'),
    password: url.get('password')
}] */

var user = [{
        name: "Pera",
        surname: "Peric",
        username: "Pperic",
        password: "Milimoj1"
    },
    {
        name: "Mile",
        surname: "Peric",
        username: "Mperic",
        password: "Milimoj1"
    },
    {
        name: "Mirko",
        surname: "Dabarcic",
        username: "mirkoXD",
        password: "Milimoj1"
    }
]
var statusDiv = document.getElementById("login_status");
for (var i = 0; i < user.length; i++) {
    statusDiv.innerHTML = "<h3> Uspesno registrovan korisnik <b>" + user[i].name + " " + user[i].surname + "</b></h3>";

}
for (let i = 0; i <= user.length; i++) {
    user = JSON.parse(localStorage.getItem("users"))
}