import React from 'react';
import './pages/Homepage.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Homepage from './pages/Homepage';
import EmployeeMaintenance from './pages/EmployeeMaintenance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Routes around your routes */}
          <Route path="/" element={<Homepage />} /> {/* Use element prop to specify component */}
          <Route path="/employee-maintenance" element={<EmployeeMaintenance />} /> {/* Use element prop to specify component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
