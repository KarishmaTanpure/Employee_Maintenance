import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../components/Navbar.css';

const HomePage = () => {
    const [fields, setFields] = useState([{ id: 1, deptId: '', deptName: '' }]);
    const [departments, setDepartments] = useState([]);
    const DEPT_NAME_MAX_LENGTH = 100;

    const handleAddFields = () => {
        const newField = { id: fields.length + 1, deptId: '', deptName: '' };
        setFields([...fields, newField]);
    };

    const handleRemoveFields = (id) => {
        const updatedFields = fields.filter(field => field.id !== id);
        setFields(updatedFields);
    };

    const handleChange = (id, e) => {
        const { name, value } = e.target;
        
        
        const isValidDeptId = /^[a-zA-Z0-9]{0,10}$/.test(value);
        
        const isValidDeptName = value.length <= DEPT_NAME_MAX_LENGTH;

        
        if ((name === 'deptId' && isValidDeptId) || (name === 'deptName' && isValidDeptName)) {
            const updatedFields = fields.map(field => {
                if (field.id === id) {
                    return { ...field, [name]: value };
                }
                return field;
            });
            setFields(updatedFields);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setDepartments([...departments, ...fields]);
        
        setFields([{ id: 1, deptId: '', deptName: '' }]);
    };

    const handleViewDepartments = () => {
        
        console.log('Viewing all departments:', departments);
        
    };

    const handleEditField = (id) => {
        
        console.log(`Editing field with ID ${id}`);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Department Information</h2>
                <form onSubmit={handleSubmit}>
                    {fields.map(field => (
                        <div className="form-row" key={field.id}>
                            <div className="form-group">
                                <label htmlFor={`deptId${field.id}`}>Department ID:</label>
                                <input
                                    type="text"
                                    id={`deptId${field.id}`}
                                    name="deptId"
                                    value={field.deptId}
                                    onChange={(e) => handleChange(field.id, e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`deptName${field.id}`}>Department Name:</label>
                                <input
                                    type="text"
                                    id={`deptName${field.id}`}
                                    name="deptName"
                                    value={field.deptName}
                                    onChange={(e) => handleChange(field.id, e)}
                                />
                            </div>
                            <div className="button-container">
                                <button type="button" className="delete-button" onClick={() => handleRemoveFields(field.id)}>Delete</button>
                                <button type="button" className="edit-button" onClick={() => handleEditField(field.id)}>Edit</button>
                                <button type="button" className="view-button" onClick={handleViewDepartments}>View</button>
                            </div>
                        </div>
                    ))}
                    <button type="button" className="add-button" onClick={handleAddFields}>+</button>
                    <button type="submit" className="submit-button">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default HomePage;
