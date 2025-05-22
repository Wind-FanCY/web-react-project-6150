import '../styles/Header.css';
import Logo from '../assets/logo-img.png';
import GlobalNav from './GlobalNav';

function Header({ setPage, title, setTitle }) {
    return (
        <header className="header">
            <img src={Logo} className="header__logo" alt="This logo serves as a link to the homepage." />
            <h1 className="header__title">Dog&apos;s World-{ title }</h1>
            <GlobalNav setPage={setPage} className="header__nav" setTitle={setTitle} />
        </header>
    );
}

export default Header;
