import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/employee-maintenance">Employee Maintenance</Link>
                <Link to="/employee-search">Employee Search</Link>
                <Link to="/log-effort">Log Your Effort</Link>
                <Link to="/create-tasks">Create Tasks</Link>
                <Link to="/student-page">Add Student</Link>
                <Link to="/student-details">Student Details</Link>
                <Link to="/class-page">Class Page</Link>
            </div>
        </nav>
    )

}

export default Navbar;