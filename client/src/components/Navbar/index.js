import React from "react";
import "./style.css";

function Navbar() {
    return (   
        <div id="nav-flex-container">
            <ul>
                <li>
                    <a href=""> About </a>
                </li>
                <li>
                    History
                </li>
                <li>
                    Maintenance
                </li>
            </ul>
        </div>
    )
};

export default Navbar;