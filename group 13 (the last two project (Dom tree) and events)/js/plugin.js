/*window,document,alert*/
// ********************************************************1-load event   UI event
window.addEventListener('load', function () {
    'use strict';
    alert("welcome to my website");
});
// ********************************************************2-Click   mouse Event
var cl = document.getElementById("cl");
var log = document.getElementById("login");
cl.addEventListener("click", function () {
    'use strict';
    log.setAttribute("class", "login");
});
var cancel = document.getElementById("cancel");
cancel.addEventListener("click", function () {
    'use strict';
    log.setAttribute("class", "login hidden");
});
// ********************************************************3-KeyUp    keyboard eveny
var na = document.getElementById("na");
var erName = document.getElementById("erName");
na.addEventListener("keyup", function () {
    'use strict';
    if (this.value.length < 5) {
        erName.textContent = "Your name must be at least 5 characters";
    } else {
        erName.textContent = "";
    }
});
// ********************************************************4-blur    focus/blur event
var pa = document.getElementById("pass");
var erPass = document.getElementById("erPass");
pa.addEventListener("blur", function () {
    'use strict';
    if (pa.value[0] !== pa.value[0].toUpperCase()) {
        erPass.textContent = "Your password must start with capital letter";
    } else {
        erPass.textContent = "";
    }
});
// ********************************************************5-submit    form event
var sub = document.getElementById("sub");
sub.addEventListener("submit", function (e) {
    'use strict';
    e.preventDefault();
    alert("your name is : " + na.value + "\n and password is : " + pa.value);
});
