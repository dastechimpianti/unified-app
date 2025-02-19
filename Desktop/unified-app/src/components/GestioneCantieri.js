import React, { useState, useEffect } from 'react';
import '../App.css'; // Se vuoi stili dedicati
import { Link } from 'react-router-dom';


export default function GestioneCantieri() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS64lCdqrw4WoN2GxST1UHsOxGJqekmaIZbzYaBeeo5wbRkexM2RcvPSvXb4Qy4acgjOXs1cdYfWyGS/pub?output=csv";
    fetch(csvUrl)
      .then(response => response.text())
      .then(csv => {
        const rows = csv.split("\n").map(row => row.split(","));
        const values = rows.slice(1); // Salta l'intestazione

        setData(values.map(row => ({
          data: row[0],
          operaio: row[1],
          cantiere: row[2],
          mezzo: row[3]
        })));
      });
  }, []);

  return (
    <div className="container mt-5">
      <Link className="btn-back" to="/">← Indietro</Link>
      <h1 className="text-center mb-4">Gestione Cantieri</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Operaio</th>
            <th>Cantiere</th>
            <th>Mezzo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.data}</td>
              <td>{entry.operaio}</td>
              <td>{entry.cantiere}</td>
              <td>{entry.mezzo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}