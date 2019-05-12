import { getUsers } from "./users";

export const getAuthedUserId = state => state.authedUser
export const getAuthedUser = state => getUsers(state)[getAuthedUserId(state)]