import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import CV from "./components/CV/CV";
import proyectosData from "./data/proyectosData";
import FloatingActions from "./components/FloatingActions/FloatingActions";

function App() {
  return (
    <Router>
      <div className="App borderCardBg">
        <Header />
        <div className="paddingApp">
          <Routes>
            <Route path="/" element={<Start proyectos={proyectosData} />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
