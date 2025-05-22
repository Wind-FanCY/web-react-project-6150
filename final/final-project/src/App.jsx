import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import MyProfile from './pages/MyProfile';
import Footer from './components/Footer';
import Avater1 from './assets/user-avater-01.png';


import './App.css';

function App() {
  const path = document.location.pathname;
  const [page, setPage] = useState(path);
  const [userPic, setUserPic] = useState(Avater1);
  const [userName, setUserName] = useState("LoveDog");
  const [userAddress, setUserAddress] = useState("4 N 2nd St Suite 150, San Jose, CA 95113");

  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.pathname);
    }
    console.log('adding listener');
    window.addEventListener('popstate', handlePageLoad);

    return () => {
      console.log('cleanup');
      window.removeEventListener('popstate', handlePageLoad);
    }
  }, []);

  return (
    <div className='app'>
      <Header setPage={setPage} userPic={userPic} userName={userName} />
      {page === '/' && <Home id="main" className="mainArea" userName={userName} userAddress={userAddress} />}
      {page === '/gallery' && <Gallery id="main" className="mainArea" />}
      {page === '/about' && <About id="main" className="mainArea" />}
      {page === '/myprofile' && <MyProfile id="main" className="mainArea" userPic={userPic} setUserPic={setUserPic}
        userName={userName} setUserName={setUserName} userAddress={userAddress} setUserAddress={setUserAddress} />}
      <Footer setPage={setPage} className="footer" />
    </div>
  );
}
        

export default App;
