import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; 
import Navbar from "../components/Navbar";
import "./EmployeeDetails.css"; 

const EmployeeDetails = () => {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const getEmployeeDetails = async () => {
            
            const results = [
                { id: 1, name: "John Doe", communicationAddress: "123 Main St", phone: "555-1234", email: "john@example.com", designation: "Software Engineer", leaves: 20, manager: "Jane Smith", totalExp: 5 },
                { id: 2, name: "Jane Smith", communicationAddress: "456 Elm St", phone: "555-5678", email: "jane@example.com", designation: "Team Lead", leaves: 25, manager: "Tom Johnson", totalExp: 8 },
               
            ];
            
            const selectedEmployee = results.find(emp => emp.id.toString() === id);
            setEmployee(selectedEmployee);
        };

        getEmployeeDetails();
    }, [id]);

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <Navbar/>
        <div className="employee-details-container">
            <h2>Employee Details</h2>
            <p>Emp ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Communication Address: {employee.communicationAddress}</p>
            <p>Phone: <a href={`tel:${employee.phone}`}>{employee.phone}</a></p>
            <p>Email: <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
            <p>Designation: {employee.designation}</p>
            <p>Leaves: {employee.leaves}</p>
            <p>Manager: {employee.manager}</p>
            <p>Total Exp: {employee.totalExp}</p>
        </div>
        </div>
    );
};

export default EmployeeDetails;
