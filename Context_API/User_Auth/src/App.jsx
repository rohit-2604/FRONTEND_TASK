import React from 'react';
import UserProfile from './UserProfile';
import Login from './Login';

const App = () => {
    return (
        <div>
            <h1>Authentication Example</h1>
            <UserProfile />
            <Login />
        </div>
    );
};

export default App;
