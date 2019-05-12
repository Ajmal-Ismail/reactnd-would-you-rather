import React, { Fragment } from 'react'
import { Login } from "../Login";
import { LoggedInApp } from "../LoggedInApp";

export const App = ({ authedUser }) =>
    <Fragment>
        {
            authedUser ?
                <LoggedInApp /> :
                <Login />
        }
    </Fragment>
