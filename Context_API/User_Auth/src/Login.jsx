import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        const userData = { name: username };
        login(userData);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
