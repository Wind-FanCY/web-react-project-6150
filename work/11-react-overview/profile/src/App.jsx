import './App.css';
import { useState } from 'react';
import Header from './components/Header.jsx';
import MainArea from './components/MainArea.jsx';
import Footer from './components/Footer.jsx';
import Border from './assets/dog-01.png';

function App() {
  const [page, setPage] = useState('Home');
  const [title, setTitle] = useState(page);
  const [userPic, setUserPic] = useState(Border);
  const [userName, setUserName] = useState("LoveDog");
  const [dogFree, setDogFree] = useState(true);

  return (
    <div className="app">
      <Header setPage={setPage} title={title} setTitle={setTitle} userPic={userPic} userName={userName} dogFree={dogFree} />
      <MainArea page={page} setPage={setPage} setTitle={setTitle} userPic={userPic} setUserPic={setUserPic} userName={userName} setUserName={setUserName} dogFree={dogFree} setDogFree={setDogFree} />
      <Footer />
    </div>
  );
}

export default App;
