import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import './ClassPage.css'; 

const ClassPage = () => {
    const [coachName, setCoachName] = useState('');
    const [numStudents, setNumStudents] = useState(0);
    const [students, setStudents] = useState([]);
    const [classMode, setClassMode] = useState('online');
    const [classLocation, setClassLocation] = useState('');
    const [zoomLink, setZoomLink] = useState('');
    const [suggestions, setSuggestions] = useState([
        'John Doe',
        'Jane Smith',
        'Michael Johnson',
        'Emily Brown',
        
    ]);
   

const handleZoomLinkChange = (event) => {
    setZoomLink(event.target.value);
};


    const handleCoachNameChange = (event) => {
        const value = event.target.value.toLowerCase();
        setCoachName(event.target.value);
    
       
        if (value.length >= 3) {
            setSuggestions(prevSuggestions => {
                return prevSuggestions.filter(suggestion => {
                    const suggestionLower = suggestion.toLowerCase();
                    return suggestionLower.includes(value);
                });
            });
        } else {
            setSuggestions([]);
        }
    };
    
    

    const handleNumStudentsChange = (event) => {
        const num = parseInt(event.target.value);
        setNumStudents(num);
        setStudents(Array.from({ length: num }, (_, index) => ""));
    };

    const handleStudentNameChange = (event, index) => {
        const updatedStudents = [...students];
        updatedStudents[index] = event.target.value;
        setStudents(updatedStudents);
    };

    const handleClassModeChange = (event) => {
        setClassMode(event.target.value);
    };

    const handleClassLocationChange = (event) => {
        setClassLocation(event.target.value);
    };


    const handleSuggestionClick = (suggestion) => {
        setCoachName(suggestion);
        setSuggestions([]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Coach Name:", coachName);
        console.log("Number of Students:", numStudents);
        console.log("Student Names:", students);
        console.log("Class Mode:", classMode);
        console.log("Class Location:", classLocation);
      
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="content-container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="coachName">Coach Name:</label>
                        <input
                            type="text"
                            id="coachName"
                            value={coachName}
                            onChange={handleCoachNameChange}
                        />
                        {coachName.length >= 3 && suggestions.length > 0 && (
                            <ul className="suggestions">
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="numStudents">Number of Students:</label>
                        <input
                            type="number"
                            id="numStudents"
                            value={numStudents}
                            onChange={handleNumStudentsChange}
                        />
                    </div>
                    {students.map((studentName, index) => (
                        <div className="form-group" key={index}>
                            <label htmlFor={`student${index + 1}`}>Student {index + 1}:</label>
                            <input
                                type="text"
                                id={`student${index + 1}`}
                                value={studentName}
                                onChange={(event) => handleStudentNameChange(event, index)}
                            />
                            
                        </div>
                    ))}
                    <div className="form-group">
    <label>Class Mode:</label>
    <div className="radio-container">
        <label>
            <input
                type="radio"
                value="online"
                checked={classMode === 'online'}
                onChange={handleClassModeChange}
            />
            Online
        </label>
        <label>
            <input
                type="radio"
                value="offline"
                checked={classMode === 'offline'}
                onChange={handleClassModeChange}
            />
            Offline
        </label>
    </div>
</div>
{classMode === 'online' && (
    <div className="form-group">
        <label htmlFor="zoomLink">Zoom Link:</label>
        <input
            type="text"
            id="zoomLink"
            value={zoomLink}
            onChange={handleZoomLinkChange}
            placeholder="Enter Zoom Link"
        />
    </div>
)}
{classMode === 'offline' && (
    <div className="form-group">
        <label htmlFor="classLocation">Class Location:</label>
        <input
            type="text"
            id="classLocation"
            value={classLocation}
            onChange={handleClassLocationChange}
            placeholder="Enter Class Location"
        />
    </div>
)}

       <div className="button-container">
                        <button type="submit">Save</button>
                        <button type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ClassPage;
