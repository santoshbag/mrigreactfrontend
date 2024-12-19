import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setUserId }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login_user', formData);
            setUserId(response.data.user_id);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;