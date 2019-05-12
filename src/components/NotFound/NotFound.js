import React from "react";
import {NavLink} from "react-router-dom";

export const NotFound = () =>
    <div>
        <div>Oppss! the page you are looking for doesn't exits.</div>
        <NavLink to="/">To Back</NavLink>
    </div>