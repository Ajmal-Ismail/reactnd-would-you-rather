import { SET_AUTHED_USER } from '../actions/authedUser'

const INITIAL_STATE = null

export default function authedUser(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.userId
        default:
            return state
    }
}