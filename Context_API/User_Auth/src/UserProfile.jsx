import React from 'react';
import { useAuth } from './AuthContext';

const UserProfile = () => {
    const { user, logout } = useAuth();

    if (!user) {
        return <div>Please log in.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserProfile;
