"use strict";

const burger = document.getElementById("burger-button");
const area = document.getElementById("area");

burger.addEventListener("click", (e)=> {
    e.preventDefault();
    burger.classList.toggle("open");
    area.classList.toggle("open");
});