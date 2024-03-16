import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TextField from "@mui/material/TextField"; 
import "./EmployeeMaintenance.css";

const EmployeeMaintenance = () => {
    const [salutation, setSalutation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dob, setDOB] = useState(null); 
    const [education, setEducation] = useState('');
    const [sportsSpecialization, setSportsSpecialization] = useState('');
    const [experience, setExperience] = useState('');
    const [priorExperience, setPriorExperience] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [salary, setSalary] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [addressLine3, setAddressLine3] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [aadharCard, setAadharCard] = useState('');
    const [panCard, setPanCard] = useState('');
    const [photo, setPhoto] = useState(null);
    

    const salutationOptions = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
    ];

    const educationOptions = [
        { label: 'Undergraduate', value: 'Undergraduate' },
        { label: 'Graduate', value: 'Graduate' },
        { label: 'Post-graduate', value: 'Post-graduate' },
    ];

    const handleSalutationChange = (e) => {
        setSalutation(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleMiddleNameChange = (e) => {
        setMiddleName(e.target.value);
    };

    const handleDOBChange = (e) => {
        setDOB(e.target.value);
    };

    const handleEducationChange = (e) => {
        setEducation(e.target.value);
    };

    const handleSportsSpecializationChange = (e) => {
        setSportsSpecialization(e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
    };

    const handlePriorExperienceChange = (e) => {
        setPriorExperience(e.target.value);
    };

    const handleDepartmentIdChange = (e) => {
        setDepartmentId(e.target.value);
    };

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePermanentAddressChange = (e) => {
        setPermanentAddress(e.target.value);
    };

    const handleAddressLine1Change = (e) => {
        setAddressLine1(e.target.value);
    };

    const handleAddressLine2Change = (e) => {
        setAddressLine2(e.target.value);
    };

    const handleAddressLine3Change = (e) => {
        setAddressLine3(e.target.value);
    };

    const handleCopyPermanentAddress = () => {
        setAddressLine1(permanentAddress);
        setAddressLine2('');
        setAddressLine3('');
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Employee Maintenance</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="salutation">Salutation: <span style={{ color: 'red' }}>*</span></label>
                        <select
                            id="salutation"
                            name="salutation"
                            value={salutation}
                            onChange={handleSalutationChange}
                            required
                        >
                            <option value="">Select Salutation</option>
                            {salutationOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="middleName">Middle Name:</label>
                        <TextField
                            id="middleName"
                            name="middleName"
                            value={middleName}
                            onChange={handleMiddleNameChange}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="dob"
                            name="dob"
                            type="date"
                            value={dob}
                            onChange={handleDOBChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="education">Educational Qualification:</label>
                        <select
                            id="education"
                            name="education"
                            value={education}
                            onChange={handleEducationChange}
                            variant="outlined"
                            fullWidth
                        >
                            <option value="">Select Educational Qualification</option>
                            {educationOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sportsSpecialization">Sports Specialization: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="sportsSpecialization"
                            name="sportsSpecialization"
                            value={sportsSpecialization}
                            onChange={handleSportsSpecializationChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="experience">Experience: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="experience"
                            name="experience"
                            value={experience}
                            onChange={handleExperienceChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priorExperience">Prior Experience: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="priorExperience"
                            name="priorExperience"
                            value={priorExperience}
                            onChange={handlePriorExperienceChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="departmentId">Department ID: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="departmentId"
                            name="departmentId"
                            value={departmentId}
                            onChange={handleDepartmentIdChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="salary"
                            name="salary"
                            value={salary}
                            onChange={handleSalaryChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="permanentAddress">Permanent Address: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="permanentAddress"
                            name="permanentAddress"
                            value={permanentAddress}
                            onChange={handlePermanentAddressChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="permanentAddress">Permanent Address: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="permanentAddress"
                            name="permanentAddress"
                            value={permanentAddress}
                            onChange={handlePermanentAddressChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine1">Address Line 1:</label>
                        <TextField
                            id="addressLine1"
                            name="addressLine1"
                            value={addressLine1}
                            onChange={handleAddressLine1Change}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine2">Address Line 2:</label>
                        <TextField
                            id="addressLine2"
                            name="addressLine2"
                            value={addressLine2}
                            onChange={handleAddressLine2Change}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine3">Address Line 3:</label>
                        <TextField
                            id="addressLine3"
                            name="addressLine3"
                            value={addressLine3}
                            onChange={handleAddressLine3Change}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div>
                        <button type="button" onClick={handleCopyPermanentAddress}>Same as Permanent address</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emergencyContact">Emergency Contact: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="emergencyContact"
                            name="emergencyContact"
                            value={emergencyContact}
                            onChange={(e) => setEmergencyContact(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="aadharCard">Aadhar Card: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="aadharCard"
                            name="aadharCard"
                            value={aadharCard}
                            onChange={(e) => setAadharCard(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="panCard">PAN Card: <span style={{ color: 'red' }}>*</span></label>
                        <TextField
                            id="panCard"
                            name="panCard"
                            value={panCard}
                            onChange={(e) => setPanCard(e.target.value)}
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Photo: <span style={{ color: 'red' }}>*</span></label>
                        <input
                          type="file"
                          id="photo"
                          name="photo"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          required
                        />
                    </div>
                    <div>
                    {photo && (
                    <img src={URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '10px' }} />
                     )}
                    </div>
                    <div className="center-button">
                    <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmployeeMaintenance;
