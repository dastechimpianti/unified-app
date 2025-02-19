import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Se vuoi stili specifici per la home

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Dastech Impianti</h1>
      <div className="button-container">
        <Link className="btn" to="/cantieri">Gestione Cantieri</Link>
        <Link className="btn" to="/attrezzatura">Riepilogo Attrezzatura</Link>
      </div>
      <footer className="footer">di Stefano Campanale</footer>
    </div>
  );
}
