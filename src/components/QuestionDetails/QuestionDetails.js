import React from 'react'
import { NotFound } from "../NotFound";
import { OptionButton } from "../styled";
import { getPercentVotes } from "../../selectors/questions";
import {
    Title,
    QuestionCard,
    QuestionCardUserWrapper,
    Description,
    QuestionContent,
    OptionVotes,
    QuestionOption,
    QuestionPrompt,
    QuestionCardButton
} from "../styled";
import { UserCard } from "../UserCard";


const QuestionResults = ({ question, authedUser }) =>
    <div>
        <QuestionOption
            className={question.optionOne.votes.includes(authedUser.id) ? 'selected' : ''}>
            {question.optionOne.text}
            <OptionVotes>{question.optionOne.votes.length} votes - {getPercentVotes(question)[0]}%</OptionVotes>
        </QuestionOption>
        <QuestionOption
            className={question.optionTwo.votes.includes(authedUser.id) ? 'selected' : ''}>
            {question.optionTwo.text}
            <OptionVotes>{question.optionTwo.votes.length} votes - {getPercentVotes(question)[1]}%</OptionVotes>
        </QuestionOption>
    </div>

const QuestionOptions = ({ question, handleAnswer }) =>
    <div>
        <OptionButton onClick={() => handleAnswer(question.id, "optionOne")}>{question.optionOne.text}</OptionButton>
        <OptionButton onClick={() => handleAnswer(question.id, "optionTwo")}>{question.optionTwo.text}</OptionButton>
    </div>

export const QuestionDetails = ({ question, askedBy, authedUser, handleAnswer, showResults }) =>
    <div>
        <Title>Question Details</Title>
        {
            question ?
                <QuestionCard>
                    <QuestionCardUserWrapper>
                        <UserCard user={askedBy} />
                        <Description>asks</Description>
                    </QuestionCardUserWrapper>
                    <QuestionContent>
                        <QuestionPrompt>Would you rather!</QuestionPrompt>
                        {
                            showResults ?
                            <QuestionResults
                                question={question}
                                authedUser={authedUser}
                            /> :
                            <QuestionOptions
                                question={ question }
                                handleAnswer={handleAnswer}
                            />
                        }
                        <QuestionCardButton to="/">Go Back</QuestionCardButton>
                    </QuestionContent>
                </QuestionCard> :
                <NotFound />
        }
    </div>