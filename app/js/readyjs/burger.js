"use strict";

var burger = document.getElementById("burger-button");
var area = document.getElementById("area");

burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("open");
    area.classList.toggle("open");
});