import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import EmployeeMaintenance from './pages/EmployeeMaintenance';
import EmployeeSearch from './pages/EmployeeSearch';
import EmployeeDetails from './pages/EmployeeDetails';
import LogEffortPage from './pages/LogEffortPage';
import CreateTasksPage from './pages/TaskPage';
// import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
        {/* <Route path="/" element={<Login />} />  */}
          <Route path="/" element={<HomePage />} /> 
          <Route path="/employee-maintenance" element={<EmployeeMaintenance />} /> 
          <Route path="/employee-search" element={<EmployeeSearch />} />
          <Route path="/employee-details/:id" element={<EmployeeDetails />} />
          <Route path="/log-effort" element={<LogEffortPage />} />
          <Route path="/create-tasks" element={<CreateTasksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
