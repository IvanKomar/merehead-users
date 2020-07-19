import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,

  FETCH_USER_REQUESTED,
  FETCH_USER_SUCCEEDED,
  FETCH_USER_FAILED,

  POST_USERS_REQUESTED,
  POST_USERS_SUCCEEDED,
  POST_USERS_FAILED,

  UPDATE_USER_REQUESTED,
  UPDATE_USER_SUCCEEDED,
  UPDATE_USER_FAILED,

  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCEEDED,
  DELETE_USER_FAILED,

} from './constants'

export const fetchUsersRequested = data => ({ type: FETCH_USERS_REQUESTED, payload: data })
export const fetchUsersSucceeded = data => ({ type: FETCH_USERS_SUCCEEDED, payload: data })
export const fetchUsersFailed = data => ({ type: FETCH_USERS_FAILED, payload: data })

export const fetchUserRequested = data => ({ type: FETCH_USER_REQUESTED, payload: data })
export const fetchUserSucceeded = data => ({ type: FETCH_USER_SUCCEEDED, payload: data })
export const fetchUserFailed = data => ({ type: FETCH_USER_FAILED, payload: data })

export const postUserRequested = data => ({ type: POST_USERS_REQUESTED, payload: data })
export const postUserSucceeded = data => ({ type: POST_USERS_SUCCEEDED, payload: data })
export const postUserFailed = data => ({ type: POST_USERS_FAILED, payload: data })

export const updateUserRequested = data => ({ type: UPDATE_USER_REQUESTED, payload: data })
export const updateUserSucceeded = data => ({ type: UPDATE_USER_SUCCEEDED, payload: data })
export const updateUserFailed = data => ({ type: UPDATE_USER_FAILED, payload: data })

export const deleteUserRequested = data => ({ type: DELETE_USER_REQUESTED, payload: data })
export const deleteUserSucceeded = data => ({ type: DELETE_USER_SUCCEEDED, payload: data })
export const deleteUserFailed = data => ({ type: DELETE_USER_FAILED, payload: data })