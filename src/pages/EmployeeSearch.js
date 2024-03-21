import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar'; 
import "../pages/EmployeeSearch.css";

const EmployeeSearch = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleEmployeeNameChange = (e) => {
        setEmployeeName(e.target.value);
    };

    const handleSearch = () => {
        const results = [
            { id: 1, name: "John Doe", communicationAddress: "123 Main St", phone: "555-1234", email: "john@example.com", designation: "Software Engineer", leaves: 20, manager: "Jane Smith", totalExp: 5 },
            { id: 2, name: "Jane Smith", communicationAddress: "456 Elm St", phone: "555-5678", email: "jane@example.com", designation: "Team Lead", leaves: 25, manager: "Tom Johnson", totalExp: 8 },
        ];
        setSearchResults(results);
    };

    return (
        <div>
            <Navbar />
            <div className="center-content"> 
            <h2>Find An Employee</h2>
            <div className="form-group">
                <label htmlFor="employeeId">Employee ID:</label>
                <input
                    id="employeeId"
                    name="employeeId"
                    value={employeeId}
                    onChange={handleEmployeeIdChange}
                    type="text"
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeeName">Employee Name:</label>
                <input
                    id="employeeName"
                    name="employeeName"
                    value={employeeName}
                    onChange={handleEmployeeNameChange}
                    type="text"
                />
            </div>
            <div className="center-button">
                <button type="button" onClick={handleSearch}>Search</button>
            </div>
            </div>
            {searchResults.length > 0 && (
                <div>
                    <h2>List of Employees</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>
                                        <Link to={`/employee-details/${employee.id}`}>{employee.name}</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EmployeeSearch;
