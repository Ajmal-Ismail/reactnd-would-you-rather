import React, { Fragment } from 'react'
import {getUserScore} from "../../selectors/users";
import { UserCardWrapper, UserAvatar, UserName, UserStats } from "../styled";

export const UserCard = ({ user, onClick, showDetails }) =>
    <UserCardWrapper onClick={onClick} className={showDetails ? "rank" : ""}>
        <UserAvatar url={user.avatarURL} size={150} />
        <UserName>{user.name}</UserName>
        {
            showDetails &&
                <Fragment>
                    <UserStats>Asked: {user.questions.length}</UserStats>
                    <UserStats>Answered: {Object.keys(user.answers).length}</UserStats>
                    <UserStats>Score: {getUserScore(user)}</UserStats>
                </Fragment>
        }
    </UserCardWrapper>