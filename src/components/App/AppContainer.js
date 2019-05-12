import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getAuthedUserId } from "../../selectors/authedUser";
import { App } from "./App";
import { handleInitialData } from '../../actions/shared'
import { withRouter } from "react-router";

const AppContainer = ({ authedUser, fetchInitialData }) => {
    useEffect(() => {
        fetchInitialData()
    }, [])

    return (
        <App
            authedUser={authedUser}
        />
    )
}

const mapState = state => ({
    authedUser: getAuthedUserId(state)
})

const mapDispatch = dispatch => ({
    fetchInitialData: () => dispatch(handleInitialData())
})

export default withRouter(connect(mapState, mapDispatch)(AppContainer))