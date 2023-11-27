import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Start from './components/Start/Start';
import NumberGames from './components/NumberGames/NumberGames';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/findTheNumber" element={<NumberGames />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;