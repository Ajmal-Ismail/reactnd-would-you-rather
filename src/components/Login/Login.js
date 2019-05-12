import React from 'react'
import { UserCard } from "../UserCard";
import { LoginTitle, UserList } from "../styled";

export const Login = ({ users, loginHandler }) =>
    <div>
        <LoginTitle>Please Login!</LoginTitle>
        <UserList>
            {Object.keys(users).map(userId =>
                <UserCard
                    key={userId}
                    user={users[userId]}
                    onClick={() => loginHandler(userId)}
                />
            )}
        </UserList>
    </div>