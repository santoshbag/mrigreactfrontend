import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import settings from '../resources/settings.json';

var url = settings.dev_server;
if (settings.environment === "production"){
    url = settings.prod_server;
}
const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/register_user/`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // withCredentials: true,
                },
            );
            alert(response.data.message);
            window.location.href = '/';
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={(e) =>
                        setFormData({ ...formData, first_name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={(e) =>
                        setFormData({ ...formData, last_name: e.target.value })
                    }
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
