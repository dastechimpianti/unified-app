import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GestioneCantieri from './components/GestioneCantieri';
import RiepilogoAttrezzatura from './components/RiepilogoAttrezzatura';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cantieri" element={<GestioneCantieri />} />
        <Route path="/attrezzatura" element={<RiepilogoAttrezzatura />} />
      </Routes>
    </Router>
  );
}

export default App;
