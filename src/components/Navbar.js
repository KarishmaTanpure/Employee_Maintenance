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
                <li><Link to="/create-tasks">Create Tasks</Link></li>
            </div>
        </nav>
    )

}

export default Navbar;