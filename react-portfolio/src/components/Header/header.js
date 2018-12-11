import React from "react";
import {Link} from "react-router-dom"

import "./header.css";

const Header = () =>(
    <div>
    <h1>Allison Driver</h1>
    <Link className="h1" to="/resume">resume</Link>
    </div>
);

export default Header;
