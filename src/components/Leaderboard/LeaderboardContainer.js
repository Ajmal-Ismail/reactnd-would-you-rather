import React from 'react'
import { connect } from "react-redux";
import { getUsersSortedByScore } from "../../selectors/users";
import { Leaderboard } from "./Leaderboard";

const LeaderboardContainer = ({ users }) =>
    <Leaderboard
        users={users}
    />

const mapState = state => ({
    users: getUsersSortedByScore(state)
})

export default connect(mapState)(LeaderboardContainer)