var params = window.location.search;

var url = new URLSearchParams(params);

export var user = {
    name: url.get('name'),
    surname: url.get('surname'),
    password: url.get('password')
}
var statusDiv = document.getElementById("login_status");
statusDiv.innerHTML = "<h3> Uspesno registrovan korisnik <b>" + user.name + " " + user.surname + "</b></h3>";
if (params != "") {
    document.getElementById("bar").hidden = true;
} else {
    document.getElementById("bar").hidden = false;
}