"use strict";

var burger = document.getElementById("burger-button");

burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("open");
    area.classList.toggle("open");
});