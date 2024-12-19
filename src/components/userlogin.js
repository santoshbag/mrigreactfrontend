import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import settings from '../resources/settings.json';
import axiosInstance from './axiosInstance';

const initializeCSRF = async () => {
  try {
    await axiosInstance.get('/api/csrf/'); // Trigger CSRF cookie setup
    console.log('CSRF initialized');
  } catch (error) {
    console.error('Failed to initialize CSRF:', error);
  }
};
const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const googleLoginUrl = "http://127.0.0.1:8000/accounts/google/login/";

    axios.defaults.withCredentials = true; // Send cookies with requests


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/auth/login/",
                formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                },
                  );
            console.log('Login Successful:', response.data);
                alert('Login successful!');
                const data = await response.data;
                localStorage.setItem('username', data.username); // Store username in localStorage
                localStorage.setItem('authToken', data.access_token);
                localStorage.setItem('refresh_token', data.refresh_token);
                // onLoginSuccess(data.username); // Notify parent or update React state
                window.location.href = '/myportfolio/';

        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
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
                <button type="submit">Login</button>
                Or
                <button
        onClick={() => {
          window.location.href = "http://127.0.0.1:8000/accounts/google/login/";
        }}
      >
        Login with Google
      </button>
            </form>
        </div>
    );
};

export default Login;
