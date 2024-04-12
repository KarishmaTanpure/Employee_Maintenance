import React, { useState } from "react";
import Navbar from '../components/Navbar';
import "./LogEffortPage.css";

const LogEffortPage = () => {
    const [additionalEfforts, setAdditionalEfforts] = useState([{ effort: '', remarks: '' }]);

    const handleTaskSelect = (e, index) => {
        const newAdditionalEfforts = [...additionalEfforts];
        newAdditionalEfforts[index] = { ...newAdditionalEfforts[index], selectedTask: e.target.value };
        setAdditionalEfforts(newAdditionalEfforts);
    };

    const handleEffortChange = (e, index) => {
        const newAdditionalEfforts = [...additionalEfforts];
        newAdditionalEfforts[index] = { ...newAdditionalEfforts[index], effort: e.target.value };
        setAdditionalEfforts(newAdditionalEfforts);
    };

    const handleRemarksChange = (e, index) => {
        const newAdditionalEfforts = [...additionalEfforts];
        newAdditionalEfforts[index] = { ...newAdditionalEfforts[index], remarks: e.target.value };
        setAdditionalEfforts(newAdditionalEfforts);
    };

    const handleAddEffort = () => {
        setAdditionalEfforts([...additionalEfforts, { effort: '', remarks: '' }]);
    };

    const handleRemoveEffort = (index) => {
        const newAdditionalEfforts = [...additionalEfforts];
        newAdditionalEfforts.splice(index, 1);
        setAdditionalEfforts(newAdditionalEfforts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Additional Efforts:", additionalEfforts);
    };

    return (
        <div className="log-effort-page">
            <Navbar />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    {additionalEfforts.map((additionalEffort, index) => (
                        <div className="form-group" key={index}>
                            <select
                                id={`taskName_${index}`}
                                name={`taskName_${index}`}
                                value={additionalEffort.selectedTask}
                                onChange={(e) => handleTaskSelect(e, index)}
                                required
                            >
                                <option value="">Select a task</option>
                                <option value="Task 1">Task 1</option>
                                <option value="Task 2">Task 2</option>
                            </select>
                            <div className="input-container">
                                <input
                                    id={`effort_${index}`}
                                    name={`effort_${index}`}
                                    value={additionalEffort.effort}
                                    onChange={(e) => handleEffortChange(e, index)} 
                                    type="number"
                                    min="8"
                                    step="0.5"
                                    placeholder="Enter effort in hours"
                                    required
                                />
                            </div>
                            <input
                                id={`remarks_${index}`}
                                name={`remarks_${index}`}
                                value={additionalEffort.remarks}
                                onChange={(e) => handleRemarksChange(e, index)}
                                type="text"
                                placeholder="Enter remarks"
                            />
                            <button className="add" type="button" onClick={handleAddEffort}>+</button>
                            <button className="remove" type="button" onClick={() => handleRemoveEffort(index)}>-</button>
                        </div>
                    ))}
                   
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogEffortPage;
