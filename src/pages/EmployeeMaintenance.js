import React, { useState } from "react";
import Navbar from "../components/Navbar";
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
    const [communicationAddress, setCommunicationAddress] = useState('');
    

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

    const experienceOptions = [
        { label: '0-10 yrs', value: '0-10' },
        { label: '10-15 yrs', value: '10-15' },
        { label: '20+ yrs', value: '20+' },
    ];

    const priorExperienceOptions = [
        { label: '0-2 yrs', value: '0-2' },
        { label: '2-5 yrs', value: '2-5' },
        { label: '5-10 yrs', value: '5-10' },
        { label: '10+ yrs', value: '10+' },
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

    const handleCommunicationAddressChange = (e) => { 
        setCommunicationAddress(e.target.value);
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
                            type="text"
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
                        <input
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                            type="text"
                            className="small-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="middleName">Middle Name:</label>
                        <input
                            id="middleName"
                            name="middleName"
                            value={middleName}
                            onChange={handleMiddleNameChange}
                            variant="outlined"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={handleLastNameChange}
                            type="text"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="dob"
                            name="dob"
                            type="date"
                            value={dob}
                            onChange={handleDOBChange}
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
                            type="text"
                        >
                            <option value="">Select Educational Qualification</option>
                            {educationOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sportsSpecialization">Sports Specialization: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="sportsSpecialization"
                            name="sportsSpecialization"
                            value={sportsSpecialization}
                            onChange={handleSportsSpecializationChange}
                            type="text"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="totalExperience">Total Experience: <span style={{ color: 'red' }}>*</span></label>
                        <select
                            id="totalExperience"
                            name="totalExperience"
                            type = "text"
                            value={experience}
                            required
                            onChange={handleExperienceChange}
                        >
                            <option value="">Select Total Experience</option>
                            {experienceOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="priorExperience">Relevant Experience: <span style={{ color: 'red' }}>*</span></label>
                        <select
                            id="priorExperience"
                            name="priorExperience"
                            type="text"
                            value={priorExperience}
                            onChange={handlePriorExperienceChange}
                            required
                        >
                            <option value="">Select Relevant Experience</option>
                            {priorExperienceOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="departmentId">Department ID: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="departmentId"
                            name="departmentId"
                            value={departmentId}
                            onChange={handleDepartmentIdChange}
                            type="text"
                            required
                        />
                        <a href={`/department/${departmentId}`} target="_blank" rel="noopener noreferrer">View Department</a>
                    </div>
                    <div className="form-group">
                        <label htmlFor="permanentAddress">Permanent Address: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="permanentAddress"
                            name="permanentAddress"
                            value={permanentAddress}
                            onChange={handlePermanentAddressChange}
                            required
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine1">Address Line 1:</label>
                        <input
                            id="addressLine1"
                            name="addressLine1"
                            value={addressLine1}
                            onChange={handleAddressLine1Change}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine2">Address Line 2:</label>
                        <input
                            id="addressLine2"
                            name="addressLine2"
                            value={addressLine2}
                            onChange={handleAddressLine2Change}
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressLine3">Address Line 3:</label>
                        <input
                            id="addressLine3"
                            name="addressLine3"
                            value={addressLine3}
                            onChange={handleAddressLine3Change}
                            type = "text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="communicationAddress">Communication Address: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="communicationAddress"
                            name="communicationAddress"
                            value={communicationAddress}
                            onChange={handleCommunicationAddressChange}
                            type = "text"
                            required
                        />
                        <div>
                        <button type="button" onClick={handleCopyPermanentAddress}>Same as Permanent address</button>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            type="text"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            type = "text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="salary"
                            name="salary"
                            value={salary}
                            onChange={handleSalaryChange}
                            placeholder="Enter salary in LPA"
                            type ="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emergencyContact">Emergency Contact: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="emergencyContact"
                            name="emergencyContact"
                            value={emergencyContact}
                            onChange={(e) => setEmergencyContact(e.target.value)}
                            required
                            type ="text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="aadharCard">Aadhar Card: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="aadharCard"
                            name="aadharCard"
                            value={aadharCard}
                            onChange={(e) => setAadharCard(e.target.value)}
                            required
                            type = "text"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="panCard">PAN Card: <span style={{ color: 'red' }}>*</span></label>
                        <input
                            id="panCard"
                            name="panCard"
                            value={panCard}
                            onChange={(e) => setPanCard(e.target.value)}
                            required
                            type ="text"
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
