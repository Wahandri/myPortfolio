import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import CV from "./components/CV/CV";
import FloatingActions from "./components/FloatingActions/FloatingActions";

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/proyectos.json")
      .then((res) => res.json())
      .then((data) => {
        setProyectos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="App borderCardBg">
        <Header />
        <div className="paddingApp">
          <Routes>
            <Route path="/" element={<Start proyectos={proyectos} loading={loading} />} />
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
