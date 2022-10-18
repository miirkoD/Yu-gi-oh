var params = window.location.search;

var url = new URLSearchParams(params);
/* 
var user = [{
    name: url.get('name'),
    surname: url.get('surname'),
    password: url.get('password')
}] */

var user = JSON.parse(localStorage.getItem('users'));

var statusDiv = document.getElementById("login_status");
if (user != null) {
    // for (var i = 0; i < user.length; i++) {
    //     statusDiv.innerHTML = "<h3> Uspesno registrovan korisnik <b>" + user[i].name + " " + user[i].surname + "</b></h3>";

    // }

}