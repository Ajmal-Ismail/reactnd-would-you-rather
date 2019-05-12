import React from 'react'
import { NavLink } from "react-router-dom";
import { NavBarWrapper, WelcomeMsg, AppNav } from "../styled";
import { UserCard } from "../UserCard";

export const NavBar = ({ user, handleLogout }) =>
    <NavBarWrapper>
        <WelcomeMsg>Welcome!</WelcomeMsg>
        <UserCard user={user} />
        <button onClick={handleLogout}>Logout</button>

        <AppNav>
            <li><NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/add" className="nav-link" activeClassName="active">New Question</NavLink></li>
            <li><NavLink to="/leaderboard" className="nav-link" activeClassName="active">Leaderboard</NavLink></li>
        </AppNav>
    </NavBarWrapper>
