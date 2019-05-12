import React from 'react'
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";
import { getAuthedUser } from "../../selectors/authedUser";
import { withRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

const NavBarContainer = ({ user, handleLogout }) =>
    <NavBar
        user={user}
        handleLogout={handleLogout}
    />

const mapState = state => ({
    user: getAuthedUser(state)
})

const mapDispatch = (dispatch, ownProps) => ({
    handleLogout: () => {
        dispatch(setAuthedUser(null))
        ownProps.history.push("/")
    }
})

export default withRouter(connect(mapState, mapDispatch)(NavBarContainer))