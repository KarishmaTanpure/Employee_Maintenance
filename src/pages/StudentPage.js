import Navbar from "../components/Navbar";
import TextField from '@mui/material/TextField';
import './StudentPage.css'; 
const StudentPage = () => {
    return (
        <div className="page-container">
            <Navbar />
            <div className="content-container">
                <form className="form-container">
                    <div className="form-group">
                        <label htmlFor="studentName">Student Name:</label>
                        <TextField id="studentName" type="text" variant="standard" className="MuiInputBase-root"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="studentDOB">Student DOB:</label>
                        <TextField id="studentDOB" type="date" variant="standard" className="MuiInputBase-root" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <TextField id="address" variant="standard" className="MuiInputBase-root" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="interest">Interest:</label>
                        <TextField id="interest" variant="standard"  className="MuiInputBase-root"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="parentsName">Parents Name:</label>
                        <TextField id="parentsName" variant="standard" className="MuiInputBase-root"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <TextField id="phoneNumber" type="tel" variant="standard" className="MuiInputBase-root"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="whatsappLink">WhatsApp Link Phone Number:</label>
                        <TextField id="whatsappLink" type="tel" variant="standard" className="MuiInputBase-root"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availability">Timings (Availability Over the Week):</label>
                        <TextField id="availability" variant="standard" className="MuiInputBase-root" />
                    </div>
                   
                    <div className="form-group">
                        <label htmlFor="additionalInfo">Additional Information:</label>
                        <TextField id="additionalInfo" variant="standard"  className="MuiInputBase-root"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <TextField id="email" type="email" variant="standard" className="MuiInputBase-root" />
                    </div>
                    <div className="button-container">
                        <button type="submit">Save</button>
                        <button type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentPage;
