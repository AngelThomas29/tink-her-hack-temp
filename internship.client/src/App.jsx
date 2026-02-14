import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddInternship from "./pages/AddInternship";

function App() {
    return (
        <Router>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <nav className="navbar">
                    <h2>Internship Portal</h2>
                    <div className="nav-links">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/add">Add Internship</Link>
                    </div>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/add" element={<AddInternship />} />  
                    </Routes>

                </div>
            </div>
        </Router>
    );
}

export default App;
