import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StockTable from './components/StockTable';
import MonthlySummary from './components/MonthlySummary';
import './App.css';
import logo from './logo.png'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ textAlign: 'center', flexGrow: 1 }}>
            <h1>Ana Elo</h1>
            <h2>Controle de Estoque</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Estoque</Link>
              </li>
              <li>
                <Link to="/resumo">Resumo Mensal</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<StockTable />} />
            <Route path="/resumo" element={<MonthlySummary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
