import React from 'react'
import { UserCard } from "../UserCard";
import { Title } from "../styled";


export const Leaderboard = ({ users }) =>
    <div>
        <Title>Leaderboard</Title>
        <div>
            {
                users.map(user => <UserCard key={user.id} user={user} showDetails />)
            }
        </div>
    </div>