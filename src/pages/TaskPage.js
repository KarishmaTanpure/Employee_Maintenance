import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import "./TaskPage.css";

const CreateTasksPage = () => {
    const [fields, setFields] = useState([{ id: 1, taskName: '', taskDetails: '' }]);

    const handleAddFields = () => {
        const newField = { id: fields.length + 1, taskName: '', taskDetails: '' };
        setFields([...fields, newField]);
    };

    const handleRemoveFields = (id) => {
        const updatedFields = fields.filter(field => field.id !== id);
        setFields(updatedFields);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFields = [...fields];
        updatedFields[index] = { ...updatedFields[index], [name]: value };
        setFields(updatedFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Tasks:", fields);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Create Tasks</h2>
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div className="form-row" key={field.id}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="taskName"
                                    value={field.taskName}
                                    placeholder="Task Name"
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="taskDetails"
                                    value={field.taskDetails}
                                    placeholder="Task Details"
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="button-group">
                        <button type="button" className='add' onClick={handleAddFields}>+</button>
                        {fields.length > 1 && <button type="button" className = "remove-button" onClick={() => handleRemoveFields(fields[fields.length - 1].id)}>-</button>}
                    </div>
                    <button type="submit">Add Tasks</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTasksPage;
