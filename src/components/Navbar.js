import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Department Maintenance</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employee-maintenance">Employee Maintenance</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;