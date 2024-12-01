import '../styles/Header.css';
import Logo from '../assets/logo-img.png';
import GlobalNav from './GlobalNav';
import ProfileSetting from './ProfileSetting';

function Header({ setPage, title, setTitle, userPic, userName, dogFree }) {
    return (
        <header className="header">
            <img onClick={()=> setPage("Home")} src={Logo} className="header__logo" alt="This is logo and for jump to homepage" />
            <h1 className="header__title">Dog&apos;s World-{title}</h1>
            <ProfileSetting className="header__profile" setPage={setPage} setTitle={setTitle} userPic={userPic} userName={userName} dogFree={dogFree} />
            <GlobalNav setPage={setPage} className="header__nav" setTitle={setTitle} />
        </header>
    );
}

export default Header;
