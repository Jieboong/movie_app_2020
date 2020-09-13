import React from "react";
import {Link} from "react-router-dom";
import './Navigation.css'

function Navigation() {
    return (
        <div class="routers">
            <Link to="/" class="routers__to__Home">Home</Link>
            <Link to="/About">About</Link>
        </div>

    )
}

export default Navigation;