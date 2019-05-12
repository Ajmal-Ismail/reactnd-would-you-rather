import React from 'react'
import {
    Title,
    QuestionCard,
    QuestionCardUserWrapper,
    Description,
    QuestionContent,
    QuestionOption,
    QuestionPrompt,
    QuestionCardButton,
    QuestionList
} from "../styled";
import { UserCard } from "../UserCard";


export const Dashboard = ({ handleFilterChange, questions, users }) =>
    <div>
        <Title>Dashboard</Title>
        <div>
            <button onClick={() => handleFilterChange('un-answered')}>Unanswered</button>
            <button onClick={() => handleFilterChange('answered')}>Answered</button>
        </div>
        <QuestionList>
            {questions.map(question => (
                <QuestionCard key={question.id}>
                    <QuestionCardUserWrapper>
                        <UserCard user={users[question.author]} />
                        <Description>asks</Description>
                    </QuestionCardUserWrapper>
                    <QuestionContent>
                        <QuestionPrompt>Would you rather</QuestionPrompt>
                        <QuestionOption>{question.optionOne.text}</QuestionOption>
                        <QuestionOption>{question.optionTwo.text}</QuestionOption>
                        <QuestionCardButton to={`question/${question.id}`}>View</QuestionCardButton>
                    </QuestionContent>
                </QuestionCard>
            ))}
        </QuestionList>
    </div>