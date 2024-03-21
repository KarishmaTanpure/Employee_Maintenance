import React, { useState } from "react";
import Navbar from '../components/Navbar';
import "./LogEffortPage.css";

const LogEffortPage = () => {
    const [effort, setEffort] = useState('');
    const [selectedTask, setSelectedTask] = useState('');

    const handleEffortChange = (e) => {
        setEffort(e.target.value);
    };

    const handleTaskSelect = (e) => {
        setSelectedTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Task:", selectedTask);
        console.log("Effort:", effort);
    };

    return (
        <div className="log-effort-page">
            <Navbar />
            <div className="container">
                <h2>Log Your Effort</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskName">Task:</label>
                        <select
                            id="taskName"
                            name="taskName"
                            value={selectedTask}
                            onChange={handleTaskSelect}
                            required
                        >
                            <option value="">Select a task</option>
                            <option value="Task 1">Task 1</option>
                            <option value="Task 2">Task 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="effort">Effort (in hrs):</label>
                        <input
                            id="effort"
                            name="effort"
                            value={effort}
                            onChange={handleEffortChange}
                            type="number"
                            min="0"
                            step="0.5"
                            placeholder="Enter effort in hours"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogEffortPage;
