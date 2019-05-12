import React from 'react'
import { connect } from "react-redux";
import {filterChange} from "../../actions/shared";
import {getFilteredQuestions} from "../../selectors/questions";
import {getUsers} from "../../selectors/users";
import { Dashboard } from "./Dashboard";

const DashboardContainer = ({ handleFilterChange, questions, users }) =>
    <Dashboard
        handleFilterChange={handleFilterChange}
        questions={questions}
        users={users}
    />

const mapState = state => ({
    questions: getFilteredQuestions(state),
    users: getUsers(state)
})

const mapDispatch = dispatch => ({
    handleFilterChange: (toggle) => dispatch(filterChange(toggle))
})

export default connect(mapState, mapDispatch)(DashboardContainer)