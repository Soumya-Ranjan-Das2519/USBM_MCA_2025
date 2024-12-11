import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import Address from './components/Address';
import Review from './components/Review';
import './App.css';

const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(' Your Form submitted successfully!');
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/details" element={<PersonalDetails formData={formData} setFormData={setFormData} />} />
                    <Route path="/address" element={<Address formData={formData} setFormData={setFormData} />} />
                    <Route path="/review" element={<Review formData={formData} handleSubmit={handleSubmit} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;