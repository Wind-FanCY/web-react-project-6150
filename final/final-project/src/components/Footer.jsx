import "../styles/Footer.css";

function Footer({ setPage, className }) {
    function changePage(e) {
        e.preventDefault();
        console.log(e.target.closest('a').pathname);
        window.history.pushState(null, '', e.target.closest('a').pathname);
        setPage(e.target.closest('a').pathname);
    }

    return (
        <footer className={`${className} footer-list`}>
            <a href="/about" onClick={changePage} className="footer-link">privacy policy</a>
            <a href="/about" onClick={changePage} className="footer-link">about us</a>
            <a href="/about" onClick={changePage} className="footer-link">join us</a>
        </footer>
    )
}

export default Footer;