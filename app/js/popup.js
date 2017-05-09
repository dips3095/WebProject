"use strict";

var popup = document.getElementById("popup");
var popup_close = document.getElementById("popup_close");
var popup_open = document.getElementById("popup_open");

popup_open.onclick = function () {
    popup.style.display = "flex";
};
popup_close.onclick = function () {
    popup.style.display = "none";
};