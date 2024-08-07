import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import CV from "./components/CV/CV";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="paddingApp">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
