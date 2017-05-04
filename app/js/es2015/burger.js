"use strict";

let burger = document.getElementById("burger-button");
let  area = document.getElementById("area");

burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("open");
    area.classList.toggle("open");
});