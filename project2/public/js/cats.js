"use strict";
(function () {
    const modal = document.querySelector('.modal');
    const mainEl = document.querySelector('.main');
    const closeButton = document.querySelector('.subscribe__cancel');

    mainEl.addEventListener('click', (e) => {
        if (!e.target.classList.contains('subscribe')) {
            return;
        }
        modal.showModal();
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });

    const modalEl = document.querySelector('.modal');
    const emailEl = document.querySelector('.email__input');
    const confirmEl = document.querySelector('.confirm__input');
    const emailAl = document.querySelector('.email__error');
    const confirmAl = document.querySelector('.confirm__error');
    let emailReg = /.*@.*/;
    let emailEr = false;
    let confirmEr = false;
    render(emailAl);
    render(confirmAl);

    modalEl.addEventListener('submit', (e) => {
        if (!emailEl.value) {
            e.preventDefault();
            emailEr = true;
            emailEl.classList.add('error__input');
            render(emailAl, emailEr, 'This field is required!');
        } else if (!emailReg.test(emailEl.value)) {
            e.preventDefault();
            emailEr = true;
            emailEl.classList.add('error__input');
            render(emailAl, emailEr, 'This field be a valid email address including a @!');
        } else if (confirmEl.value !== emailEl.value) {
            e.preventDefault();
            confirmEr = true;
            emailEr = false;
            confirmEl.classList.add('error__input');
            render(emailAl);
            render(confirmAl, confirmEr, "This field must match the provided email address!");
        } else {
            emailEr = false;
            confirmEr = false;
            render(emailAl);
            render(confirmAl);
        }
    });

    modalEl.addEventListener('input', () => {
        if (emailEl.value) {
            // emailEr = false;
            emailEl.classList.remove('error__input');
            // render(emailAl);
        }

        if (confirmEl.value) {
            confirmEl.classList.remove('error__input');
        }
    });

    function render(ele, err=false, msg="") {
        ele.innerHTML = `
            <span class=${err ? 'error__message': ''}>${ msg }</span>
        `;
    }
})();