import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        address: '',
        work_details: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/register_user', formData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <input type="text" placeholder="First Name" required onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
            <input type="text" placeholder="Last Name" required onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
            <textarea placeholder="Address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            <textarea placeholder="Work Details" onChange={(e) => setFormData({ ...formData, work_details: e.target.value })} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
