const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".containerr");
var userid = document.querySelector('.sign-in-form .input-field .userid');
var pass = document.querySelector('.sign-in-form .input-field .password');

var login = document.querySelector('.btn.solid');


sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


login.addEventListener("click", () => {
    console.log("login clicked");
    console.log(userid.value, pass.value);

    var data = JSON.stringify({
        "uname": userid.value,
        "pass": pass.value

    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;




    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var xx = json(this.responseText);
            console.log(xx["message"]);
            dat = JSON.parse(this.responseText);
            docReceived.value = dat['Summery'];
        }
    });


    xhr.open("POST", "/login");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);

});










