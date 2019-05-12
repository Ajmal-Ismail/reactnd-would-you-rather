import React from 'react'
import { connect } from "react-redux";
import { handleSaveAnswer } from "../../actions/questions";
import { getAuthedUser } from "../../selectors/authedUser";
import { getQuestions } from "../../selectors/questions";
import { getUsers } from "../../selectors/users";
import { QuestionDetails } from "./QuestionDetails";

const QuestionDetailsContainer = ({ question, askedBy, showResults, authedUser, handleAnswer }) =>
    <QuestionDetails
        question={question}
        askedBy={askedBy}
        showResults={showResults}
        handleAnswer={handleAnswer}
        authedUser={authedUser}
    />

const mapState = (state, ownProps) => {
    const { id } = ownProps.match.params
    const questions = getQuestions(state)
    if (!Object.keys(questions).includes(id)) {
        return {
            question: null
        }
    }

    const question = questions[id]
    const askedBy = getUsers(state)[question.author]
    const authedUser = getAuthedUser(state)
    const showResults = Object.keys(authedUser.answers).includes(question.id)
    return {
        question,
        askedBy,
        showResults,
        authedUser
    }
}

const mapDispatch = dispatch => ({
    handleAnswer: (qid, answer) => dispatch(handleSaveAnswer(qid, answer))
})

export default connect(mapState, mapDispatch)(QuestionDetailsContainer)