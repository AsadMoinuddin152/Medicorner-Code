import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <Link to="/HomePage" className="m-2">
                <Button>Get Started</Button>
            </Link>
        </div>
    );
};

export default LandingPage;
