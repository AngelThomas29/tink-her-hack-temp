import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");


    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "/api/Auth/register",
                {
                    name:name,
                    email: email,
                    password: password
                }
            );
            navigate("/dashboard");

            setMessage("Registration successful!");
        } catch (error) {
            setMessage("Registration failed!");
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <br /><br />

                <button type="submit">Register</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Register;
