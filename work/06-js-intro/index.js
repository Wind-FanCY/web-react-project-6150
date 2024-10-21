"use strict";
(function () {
    console.log("loadind web...");
    const buttonEl = document.querySelector(".menu-name");
    const focusEl = document.querySelector(".menu-name");
    const menuEl = document.querySelector(".submenu");

    console.log("add listener...");
    buttonEl.addEventListener("click", function () {
        focusEl.classList.toggle("unfocus");
        menuEl.classList.toggle("unactive");
        console.log("toggle successfully!");
    })
    console.log("all done.")
})();