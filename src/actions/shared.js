import { getInitialData } from '../utils/api'
import { getQuestions } from './questions'
import { getUsers } from './users'

export const FILTER_CHANGE = 'FILTER_CHANGE'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))

            })
    }
}

export function filterChange(toggle) {
    return {
        type: FILTER_CHANGE,
        data: toggle
    }
}
