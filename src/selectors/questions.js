import { getAuthedUser } from "./authedUser";
import { getFilter } from "./ui";

export const getQuestions = state => state.questions

export const getPercentVotes = question => {
    let optionOneVotes = question.optionOne.votes.length
    let optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes

    optionOneVotes = totalVotes ? optionOneVotes / totalVotes : 0
    optionTwoVotes = totalVotes ? optionTwoVotes / totalVotes : 0

    return [Math.round(optionOneVotes * 100), Math.round(optionTwoVotes * 100)]
}

export const getFilteredQuestions = state => {
    const filter = getFilter(state)
    const questions = getQuestions(state)
    const user = getAuthedUser(state)
    const answeredQuestions = Object.keys(user.answers)
    const sortedQuestionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    const answered = []
    const unanswered = []
    sortedQuestionIds.forEach(questionId => {
        if (answeredQuestions.includes(questionId)) {
            answered.push(questions[questionId])
        }
        else {
            unanswered.push(questions[questionId])
        }
    })
    return filter === 'answered' ? answered : unanswered
}