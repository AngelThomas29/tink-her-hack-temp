import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        fetchInternships();
    }, []);

    const fetchInternships = async () => {
        try {
            const response = await axios.get("/api/internships");

            console.log("API RESPONSE:", response.data);

            // SAFETY CHECK
            if (Array.isArray(response.data)) {
                setInternships(response.data);
            } else if (Array.isArray(response.data.internships)) {
                setInternships(response.data.internships);
            } else {
                setInternships([]);
            }

        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    return (
        <div>
            <h1 style={{ marginBottom: "30px" }}>Dashboard</h1>

            {internships.length === 0 ? (
                <div className="empty-box">
                    <h3>No internships found</h3>
                    <p>Add your first internship to get started.</p>
                </div>
            ) : (
                <div className="grid">
                    {internships.map((item) => (
                        <div key={item._id} className="card">
                            <h3>{item.title}</h3>
                            <p><strong>Company:</strong> {item.company}</p>
                            <p><strong>Location:</strong> {item.location}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default Dashboard;
