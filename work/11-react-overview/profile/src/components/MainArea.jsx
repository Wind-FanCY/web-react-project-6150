import '../styles/MainArea.css';
import Home from '../pages/Home';
import Dogs from '../pages/Dogs';
import Profile from '../pages/Profile';

function MainArea({ page, setPage, setTitle, userPic, setUserPic, userName, setUserName, dogFree, setDogFree }) {
    // console.log(page);

    return (
        <main className="main">
            { (page === 'Home') && <Home setPage={setPage} setTitle={setTitle} />}
            { (page === 'Dogs') && <Dogs />}
            { (page === 'Profile') && <Profile userPic={userPic} setUserPic={setUserPic} userName={userName} setUserName={setUserName} dogFree={dogFree} setDogFree={setDogFree} />}
        </main>
    )
};

export default MainArea;