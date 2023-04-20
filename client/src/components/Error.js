import React from 'react';
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Error Page Not found</h2>
                    </div>
                    <NavLink to="/">Back to home Page</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error
