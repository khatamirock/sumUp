var slider = document.getElementById("slder");
var txtbox = document.querySelector('.input');
var doctoSend = document.querySelector('.textdiv .input');
var btn = document.querySelector('.textdiv .btn');
var docReceived = document.querySelector('.textdiv2 .input');
docReceived.disabled = true;



txtbox.onkeydown = function (e) {
    if (e.key == "Enter" && e.ctrlKey) {
        btnListen();

    }

};




slider.oninput = function () {
    // output.innerHTML = this.value;
    console.log(this.value);
};


btn.addEventListener('click', btnListen);






function btnListen() {
    docReceived.disabled = false;
    btn.textContent = 'SUMMARIZED';



    var data = JSON.stringify({
        "doc": doctoSend.value,
        "ratio": slider.value

    });


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            dat = JSON.parse(this.responseText);
            docReceived.value = dat['Summery'];
        }
    });

    xhr.open("POST", "/sumry");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);






}

dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(element => {
    const selct = element.querySelector('.select');
    const caret = element.querySelector('.caret');
    const menu = element.querySelector('.menu');
    const options = element.querySelectorAll('.menu li');
    const selcted = element.querySelector('.selected');

    selct.addEventListener('click', () => {
        selct.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(elm => {

        elm.addEventListener('click', () => {
            console.debug(elm.innerHTML);
            selcted.innerHTML = elm.innerHTML;
            selct.classList.remove('select-clicked');
            menu.classList.toggle('menu-open');
            caret.classList.toggle('caret-rotate');
            options.forEach(optn => {
                optn.classList.remove('active')
            });
            elm.classList.add('active')
        })
    });



});



