import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../components/Navbar.css';

const HomePage = () => {
    const [fields, setFields] = useState([{ id: 1, deptId: '', deptName: '' }]);
    const [departments, setDepartments] = useState([]);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showError, setShowError] = useState(false);
    const DEPT_NAME_MAX_LENGTH = 100;

    const handleAddFields = () => {
        const newField = { id: fields.length + 1, deptId: '', deptName: '' };
        setFields([...fields, newField]);
    };

    const handleRemoveFields = (id) => {
        const updatedFields = fields.filter(field => field.id !== id);
        setFields(updatedFields);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;

        const isValidDeptId = /^[a-zA-Z0-9]{0,10}$/.test(value);
        const isValidDeptName = value.length <= DEPT_NAME_MAX_LENGTH;

        if ((name === 'deptId' && isValidDeptId) || (name === 'deptName' && isValidDeptName)) {
            const updatedFields = [...fields];
            updatedFields[index] = { ...updatedFields[index], [name]: value };
            setFields(updatedFields);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmptyField = fields.some(field => !field.deptId || !field.deptName);
        if (isEmptyField) {
            setShowError(true);
            return;
        }

        setDepartments([...departments, ...fields]);
        setFields([{ id: 1, deptId: '', deptName: '' }]);
        setShowSuccessPopup(true);
        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 3000);
        setShowError(false);
    };

    const handleRemoveDepartment = (index) => {
        const updatedDepartments = [...departments];
        updatedDepartments.splice(index, 1);
        setDepartments(updatedDepartments);
    };

    const handleViewDepartment = (index) => {
        console.log('Viewing department:', departments[index]);
    };

    const handleEditDepartment = (index) => {
        const updatedDepartments = [...departments];
        updatedDepartments[index].isEditing = true;
        setDepartments(updatedDepartments);
    };

    const handleSaveEdit = (index) => {
        const updatedDepartments = [...departments];
        updatedDepartments[index].isEditing = false;
        updatedDepartments[index].deptName = fields[index].deptName;
        setDepartments(updatedDepartments);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Department Information</h2>
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div className="form-row" key={field.id}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id={`deptId${field.id}`}
                                    name="deptId"
                                    value={field.deptId}
                                    placeholder="Department ID"
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id={`deptName${field.id}`}
                                    name="deptName"
                                    value={field.deptName}
                                    placeholder="Department Name"
                                    onChange={(e) => handleChange(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" className="add-button" onClick={handleAddFields}>+</button>
                    <button type="button" className="remove-button" onClick={() => handleRemoveFields(fields.length)}> - </button>
                    <button type="submit" className="submit-button">Add</button>
                </form>
                {showError && (
                    <div className="error-message">
                        Please fill in all input fields.
                    </div>
                )}
                {showSuccessPopup && (
                    <div className="success-popup">
                        Department added successfully!
                    </div>
                )}
                <div>
                    <h3>List Of Departments:</h3>
                    <table className="department-table">
                        <thead>
                            <tr>
                                <th>Department ID</th>
                                <th>Department Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((dept, index) => (
                                <tr key={index}>
                                    <td>{dept.deptId}</td>
                                    <td>
                                        {dept.isEditing ? (
                                            <React.Fragment>
                                                <input
                                                    type="text"
                                                    value={fields[index].deptName}
                                                    onChange={(e) => {
                                                        const updatedFields = [...fields];
                                                        updatedFields[index].deptName = e.target.value;
                                                        setFields(updatedFields);
                                                    }}
                                                />
                                                <button type="button" onClick={() => handleSaveEdit(index)}>Save</button>
                                            </React.Fragment>
                                        ) : (
                                            dept.deptName
                                        )}
                                    </td>
                                    <td>
                                        {dept.deptName && (
                                            <React.Fragment>
                                                {dept.isEditing ? null : (
                                                    <React.Fragment>
                                                        <button type="button" className="edit-button" onClick={() => handleEditDepartment(index)}>Edit</button>
                                                        <button type="button" className="delete-button" onClick={() => handleRemoveDepartment(index)}>Delete</button>
                                                        <button type="button" className="view-button" onClick={() => handleViewDepartment(index)}>View</button>
                                                    </React.Fragment>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
