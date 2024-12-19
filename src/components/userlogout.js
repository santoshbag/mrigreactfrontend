const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('username'); // Remove username from localStorage
        localStorage.removeItem('authToken'); // Remove username from localStorage
        // onLogout(); // Notify parent or update React state
        alert('Logged out successfully!');
        window.location.href = '/'; // Redirect to home or login page
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
