import React from 'react'
import { connect } from "react-redux";
import { handleSaveQuestion } from "../../actions/questions";
import { NewQuestion } from "./NewQuestion";

const NewQuestionContainer = ({ handleSubmit }) =>
    <NewQuestion
        onSubmit={handleSubmit}
    />

const mapDispatch = (dispatch, ownProps) => ({
    handleSubmit: values => {
        dispatch(handleSaveQuestion(values.firstOption, values.secondOption))
        ownProps.history.push("/")
    }
})

export default connect(null, mapDispatch)(NewQuestionContainer)