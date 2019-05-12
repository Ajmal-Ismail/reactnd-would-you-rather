import { SET_AUTHED_USER } from "../actions/authedUser";
import { ADD_QUESTION, SAVE_ANSWER } from "../actions/questions";
import { FILTER_CHANGE } from "../actions/shared";

const INITIAL_STATE = {
    filter: 'un-answered'
}

export default function ui(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FILTER_CHANGE:
            return {
                ...state,
                filter: action.data
            }
        case SET_AUTHED_USER:
        case SAVE_ANSWER:
        case ADD_QUESTION:
            return INITIAL_STATE
        default:
            return state
    }
}