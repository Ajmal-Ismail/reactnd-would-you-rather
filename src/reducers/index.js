import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import ui from './ui'

export default combineReducers({
    users,
    authedUser,
    questions,
    ui
})