import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginTitle = styled.h1`
    font-size: 18px;
    text-align: center;
    
`

export const UserList = styled.div`
    text-align: center;
`

export const NavBarWrapper = styled.div`
    float: left;
    width: 200px;
    text-align: center;
`

export const WelcomeMsg = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const AppNav = styled.ul`
    list-style: none;
    padding: 0;
    
    & a {
        text-decoration: none;
        
        &.active {
            text-decoration: underline;
        }
    }
`

export const AppContainer = styled.div`
    margin-left: 200px;
`

export const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const QuestionList = styled.div`
    margin-top: 20px;
`


export const QuestionCard = styled.div`
    padding: 20px;
    width: 700px;
    margin-bottom: 20px;
    height: 190px;
    border: 1px solid grey;
`

export const QuestionCardUserWrapper = styled.div`
    float: left;
    width: 170px;
`

export const Description = styled.div`
    text-align: center;
`

export const QuestionContent = styled.div`
    margin-left: 200px;
`

export const QuestionPrompt = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 50px;
`

export const QuestionOption = styled.div`
    padding: 5px;
    margin: 5px;
    color: grey;
    
    &.selected {    
        border: 1px solid red;
    }
`

export const OptionVotes = styled.div`
    float: right;
    color: black;
`

export const QuestionCardButton = styled(NavLink)`
    display: inline-block;
    margin-top: 33px;
`

export const Prompt = styled.div`
    font-size: 16px;
    font-weight: bold;
`

export const Input = styled.input`
    display: block;
`

export const OptionButton = styled.button`
    display: block;
    padding: 5px;
    margin: 5px;
`

export const UserCardWrapper = styled.div`
    display: inline-block;
    margin-left: 10px;
    
    &.rank {
        &:first-child {
            border: 1px solid green;
        }
        
        &:nth-child(2) {
            border: 1px solid yellow;
        }
        
        &:last-child {
            border: 1px solid red;
        }
    }
`

export const UserAvatar = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    background-image: url("${props => props.url}");
    background-size: ${props => props.size}px ${props => props.size}px;
`

export const UserName = styled.div`
    text-align: center;
    font-weight: bold;
`

export const UserStats = styled.div`
    text-align: center;
`