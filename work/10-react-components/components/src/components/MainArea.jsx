import '../styles/MainArea.css';
import Home from '../pages/Home';
import About from '../pages/About';
import Dogs from '../pages/Dogs';

function MainArea({ page, setPage, setTitle }) {
    // console.log(page);

    return (
        <main className="main">
            { (page === 'Home') && <Home setPage={setPage} setTitle={setTitle} />}
            { (page === 'Dogs') && <Dogs />}
            { (page === 'About') && <About />}
        </main>
    )
};

export default MainArea;