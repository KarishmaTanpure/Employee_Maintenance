import React, { useState } from 'react';
import './ClassPage.css'; 
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



function ClassPage() {
    const [mode, setMode] = useState('');
    const [locationVisible, setLocationVisible] = useState(false);
    const [zoomVisible, setZoomLinkVisible] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [location, setLocation] = useState('');
    const [coachName, setCoachName] = useState('');
    const [studentPopupVisible, setStudentPopupVisible] = useState(false);
    const [students, setStudents] = useState([]);
    const [numStudents, setNumStudents] = useState(0);
    

    const handleModeChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
        if (selectedMode === 'Offline') {
            setLocationVisible(true);
            setZoomLinkVisible(false);
        } else if (selectedMode === 'Online') {
            setLocationVisible(false);
            setZoomLinkVisible(true);
        }
    };


    const handleSearchIconClick = () => {
        setPopupVisible(true);
    };

    const handleReturnButtonClick = () => {
        setPopupVisible(false);
    };

    const handleSubmit = () => {
        console.log("Selected mode:", mode);
        
    };

    const handleCityChange = (event, value) => {
        setCity(value);
    };

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleCoachNameChange = (event) => {
        setCoachName(event.target.value);
    };



    const fetchCitySuggestions = async (inputValue) => {
        const dummyData = [
            "New York",
            "Los Angeles",
            "Chicago",
            "Houston",
            "Phoenix",
            "Philadelphia",
            "San Antonio",
            "San Diego",
            "Dallas",
            "San Jose"
        ];

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const filteredSuggestions = dummyData.filter(city => city.toLowerCase().startsWith(inputValue.toLowerCase()));

        setCitySuggestions(filteredSuggestions);
    };


     const handleStudentPopupButtonClick = () => {
        setStudentPopupVisible(true);
    };

     const handleStudentPopupReturnButtonClick = () => {
        setStudentPopupVisible(false);
     };
     const handleNumStudentsChange = (event) => {
        const num = parseInt(event.target.value);
        setNumStudents(num);
        const updatedStudents = Array.from({ length: num }, (_, index) => ({
            id: index + 1,
            name: `Student ${index + 1}`,
            selected: false,
        }));
        setStudents(updatedStudents);
    };

     const handleStudentCheckboxChange = (studentId) => {
        setStudents(students.map(student => {
            if (student.id === studentId) {
                return { ...student, selected: !student.selected }; // Toggle the selected state
            }
            return student;
        }));
    };

    return (
        <div>
        <Navbar/>
        <div className="content-container">
        <div className="input-row radio-row"> 
            <label htmlFor="classmode">Class Mode:</label>
                <label>
                    <input type="radio" id="offline" name="mode" value="Offline" onChange={handleModeChange} />
                    Offline
                </label>
                <label>
                    <input type="radio" id="online" name="mode" value="Online" onChange={handleModeChange} />
                    Online
                </label>
            </div>
            {locationVisible && (
                   <div className="input-row">
                        <label htmlFor="location">Location:</label>
                        <TextField id="standard-basic" variant="standard" />
                        <span className="search-icon" onClick={handleSearchIconClick} > <FontAwesomeIcon icon={faSearch} /></span>
                    </div>
                )}
                {zoomVisible && (
                       <div className="input-row">
                       <label htmlFor="zoomlink">Zoom/Google Meet Link:</label>
                       <TextField id="standard-basic" variant="standard" />
                       </div>
                )}
                <div className="input-row"> 
                    <label htmlFor="coachName">Coach Name:</label>
                    <Select
                        id="coachName"
                        value={coachName}
                        onChange={handleCoachNameChange}
                        variant="standard"
                    >
                        <MenuItem value="">Select Coach Name</MenuItem>
                        <MenuItem value="Coach A">Coach A</MenuItem>
                        <MenuItem value="Coach B">Coach B</MenuItem>
                        <MenuItem value="Coach C">Coach C</MenuItem>
                    </Select>
                </div>
                <div className="input-row">
                        <label htmlFor="studentnumber">Number Of Students:</label>
                        <TextField id="standard-basic" variant="standard" value={numStudents} onChange={handleNumStudentsChange} />
                    </div>
                <div className="input-row">
                        <label htmlFor="student">Select Student:</label>
                        <TextField id="standard-basic" variant="standard" />
                        <span className="search-icon" onClick={handleStudentPopupButtonClick} > <FontAwesomeIcon icon={faSearch} /></span>
                    </div>
        </div>
        <button onClick={handleSubmit} className="submit-button" >Submit</button>
        {popupVisible && (
                <div className="popup">
                    <div className="popup-inner">
                        <div className="popup-inputs">
                        <div className="input-row">
                            <label htmlFor="city">City:</label>
                            <Autocomplete
                                    id="city"
                                    freeSolo
                                    options={citySuggestions}
                                    value={city}
                                    onChange={handleCityChange}
                                    onInputChange={(event, newInputValue) => {
                                        if (newInputValue.length >= 3) {
                                            fetchCitySuggestions(newInputValue);
                                        }
                                    }}
                                    renderInput={(params) => <TextField {...params} variant="standard" className="text-field" />}
                                />
                        </div>
                        
                        <div className="input-row">
                            <label htmlFor="area">Area:</label>
                            <Select
                                    id="area"
                                    value={area}
                                    onChange={handleAreaChange}
                                    variant="standard"
                                    className="text-field"
                                >
                                    <MenuItem value="">Select Area</MenuItem>
                                    <MenuItem value="Downtown">Downtown</MenuItem>
                                    <MenuItem value="Midtown">Midtown</MenuItem>
                                    <MenuItem value="Uptown">Uptown</MenuItem>
                                    </Select>
                        </div>
                        <div className="input-row">
                            <label htmlFor="location">Location:</label>
                            <Select
                                    id="location"
                                    value={location}
                                    onChange={handleLocationChange}
                                    variant="standard"
                                    className="text-field"
                                >
                                    <MenuItem value="">Select Location</MenuItem>
                                    <MenuItem value="">Location1</MenuItem>
                            </Select>
                        </div>
                        </div>
                        <button onClick={handleReturnButtonClick}>Return</button>
                    </div>
                </div>
        )}
                {studentPopupVisible && (
                    <div className="popup">
                        <div className="popup-inner">
                            <div className="popup-inputs">
                                <div className="input-row">
                                    <h3>Find your students:</h3>
                                </div>
                        <div className="input-row">
                        <label htmlFor="id">ID:</label>
                        <TextField id="standard-basic" variant="standard" className="id-input"/>
                        </div>
                        <div className="input-row">
                        <label htmlFor="name">Name:</label>
                        <TextField id="standard-basic" variant="standard" className="name-input" />
                        </div>
                        <div>
                        <button >Find</button>
                        </div>
                        <div>
                        {students.map(student => (
                                <div key={student.id} className="input-row">
                                    <input type="checkbox" checked={student.selected}
                                    onChange={() => handleStudentCheckboxChange(student.id)}
                                />
                                <label htmlFor={`student-${student.id}`}>{student.name}</label>
                                </div>
                            ))}
                        </div>
                                </div>
                                <button onClick={handleStudentPopupReturnButtonClick}>Close</button>
                                </div>
                                </div>           
            )}
        </div>
    );
}

export default ClassPage;
