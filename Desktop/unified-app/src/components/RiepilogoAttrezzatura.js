import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Puoi creare questo file per eventuali stili specifici o importare lo stesso CSS globale

export default function RiepilogoAttrezzatura() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Sostituisci con l'URL del tuo Google Sheet per Riepilogo Attrezzatura
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQVJ1-ZUea7Y8A8kDENxCzju_HrhTKZmtaRFpGMEXPpoeb1UKZby28Yq9h55yYLJgJAWFYMh8a_NxTe/pub?gid=0&single=true&output=csv";
    fetch(csvUrl)
      .then(response => response.text())
      .then(csv => {
        const rows = csv.split("\n").map(row => row.split(","));
        const values = rows.slice(1);

        setData(values.map(row => ({
          attrezzatura: row[0],
          cantiere: row[1],
          data: row[2],
          consegnata: row[3]
        })));
      });
  }, []);

  return (
    <div className="container mt-5">
      <Link className="btn-back" to="/">← Indietro</Link>
      <h1 className="text-center mb-4">Riepilogo Attrezzatura</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Attrezzatura</th>
            <th>Cantiere</th>
            <th>Data</th>
            <th>Consegnata a</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.attrezzatura}</td>
              <td>{entry.cantiere}</td>
              <td>{entry.data}</td>
              <td>{entry.consegnata}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
