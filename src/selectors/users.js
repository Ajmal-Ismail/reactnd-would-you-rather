export const getUsers = state => state.users
export const getUsersSortedByScore = state => {
    return Object.keys(getUsers(state))
        .map(id => getUsers(state)[id])
        .sort((a, b) =>
            (getUserScore(b) - getUserScore(a))
        )
}

export const getUserScore =  user => user.questions.length + Object.keys(user.answers).length