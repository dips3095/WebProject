"use strict";

const popup = document.getElementById("popup");
const popup_close = document.getElementById("popup_close");
const popup_open = document.getElementById("popup_open");
const popup_name = document.getElementById("popup_name");
const popup_email = document.getElementById("popup_email");
const popup_send = document.getElementById("popup_send");
const reg_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const reg_name = /^[a-zA-Z]+$/;


popup_open.onclick = () => {
    popup.style.display = "flex"
};
popup_close.onclick = () => {
    popup.style.display = "none"
}
function show_error(el) {
    el.style.boxShadow = "0 0 10px rgba(255,0,0,0.7)"
    el.style.backgroundColor = "rgba(255,0,0,0.7)"
}
function reset_error(el) {
    el.style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"
    el.style.backgroundColor = "#eef1ec"
}
function validate(el, reg) {
    let res = true
    if (!el.value) {
        res = false
    }
    if (!reg.test(el.value)) {
        res = false
    }
    if (!res) {
        show_error(el)
        return false
    }
    reset_error(el)
    return true
}

popup_send.onclick = () => {
    let res = validate(popup_email, reg_email)
    let res1 = validate(popup_name, reg_name)
    if (!(res && res1)) return false
    alert("success email!")
    alert("success name!")
    return true
}
popup_email.addEventListener("click", () => reset_error(popup_email))
popup_name.addEventListener("click", () => reset_error(popup_name))
