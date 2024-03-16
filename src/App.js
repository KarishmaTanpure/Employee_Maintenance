import React from 'react';
import './pages/Homepage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './pages/Homepage';
import EmployeeMaintenance from './pages/EmployeeMaintenance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<Homepage />} /> 
          <Route path="/employee-maintenance" element={<EmployeeMaintenance />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
