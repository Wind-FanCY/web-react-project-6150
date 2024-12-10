import GlobalNav from "./GlobalNav";
import ProfileNav from "./ProfileNav";
import Logo from "../assets/logo-dog.png"
import '../styles/Header.css';

function Header({ setPage, userPic, userName }) {
    function changePage(e) {
        e.preventDefault();
        console.log(e.target.closest('a').pathname);
        window.history.pushState(null, '', e.target.closest('a').pathname);
        setPage(e.target.closest('a').pathname);
    }

    return (
        <header className="header">
            <a href="#main" className="skip-link">Skip to content</a>
            <a href="/" onClick={changePage} className="header-logo">
                <img src={Logo} className="logo-image" alt="This logo serves as a link to the homepage." />
            </a>
            <h1 className="header-title">Dog&apos;s World</h1>
            <ProfileNav changePage={changePage} className="header-profile" userPic={userPic} userName={userName} />
            <GlobalNav changePage={changePage} className="header-global" />
        </header>
    )
}

export default Header;