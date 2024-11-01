"use strict";
(function () {
    const formEl = document.querySelector(".register");
    const nameEl = document.querySelector(".register__name");
    const emailEl = document.querySelector(".register__email");
    const confirmEl = document.querySelector(".register__confirm");
    const nameAl = document.querySelector(".name-alert");
    const emailAl = document.querySelector(".email-alert");
    const confirmAl = document.querySelector(".confirm-alert");

    const inputEl = [nameEl, emailEl];
    const alertEl = [nameAl, emailAl];

    formEl.addEventListener('submit', (e) => {
        inputEl.forEach((item, index) => {
            if (item.value) {
                alertEl[index].innerHTML = "";
                item.classList.remove("error");
                if (emailEl.value !== confirmEl.value) {
                    e.preventDefault();
                    confirmAl.innerHTML = `<span class="out">! ${confirmEl.name} must match ${emailEl.name}</span>`;
                    confirmEl.classList.add("error");
                }
                else {
                    confirmAl.innerHTML = "";
                    confirmEl.classList.remove("error");
                }
            }
            else {
                e.preventDefault();
                alertEl[index].innerHTML = `<span class="out">! ${inputEl[index].name} is required</span>`;
                item.classList.add("error");
            }
        });
    });

    formEl.addEventListener('input', () => {
        if (nameEl.value) {
            nameAl.innerHTML = "";
            nameEl.classList.remove("error");
        }
        else {
            nameAl.innerHTML = `<span class="out">! ${nameEl.name} is required</span>`;
            nameEl.classList.add("error");
        }

        if (emailEl.value) {
            emailAl.innerHTML = "";
            emailEl.classList.remove("error");
        }
    });

})();