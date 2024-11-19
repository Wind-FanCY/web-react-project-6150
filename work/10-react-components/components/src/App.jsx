import './App.css';
import { useState } from 'react';
import Header from './components/Header.jsx';
import MainArea from './components/MainArea.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [page, setPage] = useState('Home');
  const [title, setTitle] = useState(page);

  return (
    <div className="app">
      <Header setPage={setPage} title={title} setTitle={setTitle}/>
      <MainArea page={page} setPage={setPage} setTitle={setTitle} />
      <Footer />
    </div>
  );
}

export default App;
