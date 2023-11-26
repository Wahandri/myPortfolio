import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [name, setName] = useState('Wahandri');

  useEffect(() => {
    const interval = setInterval(() => {
      setName(prevName => prevName === 'Wahandri' ? 'Manuel' : 'Wahandri');
    }, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='greeting'>
        <h1>Hey, I am <span className='color2'>{ name }</span></h1>
        <h1>I am a  <span className='color2'>developer</span></h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
