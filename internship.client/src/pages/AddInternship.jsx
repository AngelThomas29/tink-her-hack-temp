import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function AddInternship({ onAddSuccess }) {
    const [companyName, setCompanyName] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [appliedDate, setAppliedDate] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    navigate("/dashboard");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/Internships", {
                title: role,
                company: companyName,
                location: "Not Specified",
                userId: 1
            });

            alert("Internship Added Successfully!");

            setCompanyName("");
            setRole("");
            setStatus("Applied");
            setAppliedDate("");
            setNotes("");

        } catch (error) {
            console.error(error);
            alert("Error adding internship");
        }
    };


    return (
        <div style={{ marginBottom: "30px" }}>
            <h3>Add Internship</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                />
                <br /><br />

                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Selected</option>
                    <option>Rejected</option>
                </select>
                <br /><br />

                <input
                    type="date"
                    value={appliedDate}
                    onChange={(e) => setAppliedDate(e.target.value)}
                    required
                />
                <br /><br />

                <textarea
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <br /><br />

                <button type="submit">Add Internship</button>
            </form>
        </div>
    );
}

export default AddInternship;
