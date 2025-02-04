import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import Dashboard from './Dashboard';
import AppBar from './AppBar';
import FeeReceipt from './FeeReceipt';
import Card from './Card.jsx';
import Accounts from './Accounts.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        {/* Wrap the routes inside <Routes> */}
        <Routes>
          {/* The route for the Dashboard (home page) */}
          <Route path="/" element={<Dashboard />} />

          {/* Add routes for FeeReceipt and Card after accessing root */}
          {/* <Route path="/fee-receipt" element={<FeeReceipt />} /> */}
          <Route path="/card" element={<Card />} />
          <Route path="/Accounts" element={<Accounts />} />
          <Route path="/FeeReceipt" element={<FeeReceipt/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
