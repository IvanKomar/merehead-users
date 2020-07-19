import {
  FETCH_USERS_SUCCEEDED,
  FETCH_USER_SUCCEEDED,
  POST_USERS_SUCCEEDED,
  UPDATE_USER_SUCCEEDED,
  DELETE_USER_SUCCEEDED,
} from "./constants"

const initialState = {
  users: [],
  currentUser: null,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_USERS_SUCCEEDED: {
      return { ...state, users: action.payload }
    }
    case FETCH_USER_SUCCEEDED: {
      return { ...state, currentUser: action.payload }
    }
    case UPDATE_USER_SUCCEEDED: {
      return {
        ...state,
        users: state.users.map(user => user.id === action.payload.id ? action.payload : user),
        currentUser: action.payload
      }
    }
    case POST_USERS_SUCCEEDED: {
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    }
    case DELETE_USER_SUCCEEDED: {
      return {
        ...state,
        users: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as users }