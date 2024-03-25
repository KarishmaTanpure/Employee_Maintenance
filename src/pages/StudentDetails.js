import React from 'react';
import Navbar from "../components/Navbar";
import './StudentDetails.css'; 

const StudentDetails = () => {
    const studentDetails = {
        id: '123456',
        name: 'John Doe',
        address: '123 Main St, City, Country',
        phone: '123-456-7890'
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="content-container">
                <div className="student-details">
                    <div className="detail-item">
                        <label>Student ID:</label>
                        <span>{studentDetails.id}</span>
                    </div>
                    <div className="detail-item">
                        <label>Name:</label>
                        <span>{studentDetails.name}</span>
                    </div>
                    <div className="detail-item">
                        <label>Address:</label>
                        <span>{studentDetails.address}</span>
                    </div>
                    <div className="detail-item">
                        <label>Phone#:</label>
                        <span>{studentDetails.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails;
