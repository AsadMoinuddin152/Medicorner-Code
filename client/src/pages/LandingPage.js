import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <div className="background"></div>
            <div className="landingPage">
                <h1 className="heading">
                    MEDICORNER
                    <span>
                        WHICH
                        <br />
                        MAKES
                    </span>
                    YOUR LIFE HAPPY
                </h1>
                <p className="col-md-5 tag-line">
                    The medical center uses the latest technology, such as
                    appointments to ensure accurate and efficient care.
                    Medicorner also offers rehabilitation services to help
                    patients regain mobility and independence after an injury or
                    surgery, as well as pediatric care to keep children healthy
                    and happy
                </p>
                <br />
                <p className="pt-4">
                    <Link to="/HomePage" className="m-2">
                        <button className="btn">Home Page</button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
