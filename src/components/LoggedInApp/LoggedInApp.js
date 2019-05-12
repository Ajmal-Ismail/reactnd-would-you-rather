import React, { Fragment } from 'react'
import {Route, Switch} from "react-router-dom";
import {Dashboard} from "../Dashboard";
import {Leaderboard} from "../Leaderboard";
import { NavBar } from "../NavBar";
import {NewQuestion} from "../NewQuestion";
import {NotFound} from "../NotFound";
import { QuestionDetails } from "../QuestionDetails/";
import {AppContainer} from "../styled";

export const LoggedInApp = () =>
    <Fragment>
        <NavBar />

        <AppContainer>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard}/>
                <Route path="/question/:id" component={QuestionDetails}/>
                <Route path="/add" component={NewQuestion}/>
                <Route component={NotFound}/>
            </Switch>
        </AppContainer>
    </Fragment>