"use strict";

var popup = document.getElementById("popup");
var popup_close = document.getElementById("popup_close");
var popup_open = document.getElementById("popup_open");
var popup_name = document.getElementById("popup_name");
var popup_email = document.getElementById("popup_email");
var popup_send = document.getElementById("popup_send");
var reg_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var reg_name = /^[a-zA-Z]+$/;

popup_open.onclick = function () {
    popup.style.display = "flex";
};
popup_close.onclick = function () {
    popup.style.display = "none";
};
function show_error(el) {
    el.style.boxShadow = "0 0 10px rgba(255,0,0,0.7)";
    el.style.backgroundColor = "rgba(255,0,0,0.7)";
}
function reset_error(el) {
    el.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)";
    el.style.backgroundColor = "#eef1ec";
}
function validate(el, reg) {
    var res = true;
    if (!el.value) {
        res = false;
    }
    if (!reg.test(el.value)) {
        res = false;
    }
    if (!res) {
        show_error(el);
        return false;
    }
    reset_error(el);
    return true;
}

popup_send.onclick = function () {
    var res = validate(popup_email, reg_email);
    var res1 = validate(popup_name, reg_name);
    if (!(res && res1)) return false;
    alert("success email!");
    alert("success name!");
    return true;
};
popup_email.addEventListener("click", function () {
    return reset_error(popup_email);
});
popup_name.addEventListener("click", function () {
    return reset_error(popup_name);
});