import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <span>Employee Details &#9660; </span>
                    <div className="dropdown-content">
                <Link to="/employee-maintenance">Employee Maintenance</Link>
                <Link to="/employee-search">Employee Search</Link>
                <Link to="/employee-appraisal">Employee Appraisal</Link>
                <Link to="/employee-leaves">Employee Leaves</Link>
                </div>
                </div>
                <div className="dropdown">
                    <span>Time Sheet &#9660;</span>
                    <div className="dropdown-content">
                        <Link to="/create-tasks">Create Tasks</Link>
                        <Link to="/log-effort">Log Your Effort</Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;