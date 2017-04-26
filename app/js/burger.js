let burger = document.getElementById("burger-button");

burger.addEventListener("click", (e) => {
    e.preventDefault();
burger.classList.toggle("open");
area.classList.toggle("open");
});