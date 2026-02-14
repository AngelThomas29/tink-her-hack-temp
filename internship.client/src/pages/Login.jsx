import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "/Identity/Account/Login",
                {
                    email: email,
                    password: password
                },
                { withCredentials: true }
            );
            navigate("/dashboard");


            setMessage("Login successful!");
        } catch (error) {
            setMessage("Login failed!");
            console.error(error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
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

                <button type="submit">Login</button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Login;
