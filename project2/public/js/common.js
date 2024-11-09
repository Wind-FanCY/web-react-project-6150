"use strict";
(function () {
    const menuEl = document.querySelector('.menu');
    let opened = false;
    render();

    menuEl.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-name')) {
            console.log("can't find");
            return;
        }
        opened = !opened;
        render();
    })

    function render() {
        menuEl.innerHTML = `
            <li class="menu-option">
                <button class="menu-name" type="button" aria-label=${opened ? "Close the dropdown menu." : "Open the dropdown menu."}><img src="images/menu.png" alt=""></button>
                <ul class="submenu ${opened ? 'opened' : ''}">
                    <li class="submenu-link"><a href="index.html">Home</a></li>
                    <li class="submenu-link"><a href="cats.html">Famous Cats</a></li>
                    <li class="submenu-link"><a href="other.html">Cat Events</a></li>
                </ul>
            </li>
        `;
    }

})();