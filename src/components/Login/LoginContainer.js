import React from 'react'
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";
import { getUsers } from "../../selectors/users";
import { Login } from "./Login";

const LoginContainer = ({ users, loginHandler }) =>
    <Login
        loginHandler={loginHandler}
        users={users}
    />

const mapState = state => ({
    users: getUsers(state)
})

const mapDispatch = dispatch => ({
    loginHandler: (userId) => dispatch(setAuthedUser(userId))
})

export default connect(mapState, mapDispatch)(LoginContainer)