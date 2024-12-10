import { useState } from "react";
import Menu from "../assets/icon-menu.png";
import "../styles/GlobalNav.css";

function GlobalNav({ changePage, className }) {
    const [hidden, setHidden] = useState(true);

    const handleOpenMenu = () => {
        setHidden(!hidden);
    };

    return (
        <nav className={`${className} global-nav`}>
            <button className="nav-btn" type="button" aria-label={hidden ? "Open the dropdown menu." : "Close the dropdown menu."} onClick={handleOpenMenu}>
                <img src={Menu} alt="" className="icon-menu" />
            </button>
            <ul className={`nav-submenu ${hidden && "hidden"}`}>
                <li className="global-item">
                    <a href="/" onClick={changePage} className="global-link">Home</a>
                </li>
                <li className="global-item">
                    <a href="/gallery" onClick={changePage} className="global-link">Gallery</a>
                </li>
                <li className="global-item">
                    <a href="/about" onClick={changePage} className="global-link">About</a>
                </li>
            </ul>
        </nav>
    )
}

export default GlobalNav;