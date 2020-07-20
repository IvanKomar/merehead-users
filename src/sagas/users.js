import { call, put, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'

import {
  get,
  post,
  update,
  remove
} from '../api'

import {
  fetchUsersSucceeded,
  fetchUsersFailed,
  fetchUserSucceeded,
  fetchUserFailed,
  postUserSucceeded,
  postUserFailed,
  updateUserSucceeded,
  updateUserFailed,
  deleteUserSucceeded,
  deleteUserFailed
} from '../redux/users/actions'

import { startLayoutSpinner, stopLayoutSpinner } from '../redux/spinners/actions'

import {
  FETCH_USERS_REQUESTED,
  FETCH_USER_REQUESTED,
  POST_USERS_REQUESTED,
  UPDATE_USER_REQUESTED,
  DELETE_USER_REQUESTED,
} from '../redux/users/constants'

import { handleError } from './error'

const fetchUsersSaga = function* () {
  try {
    yield put(startLayoutSpinner(FETCH_USERS_REQUESTED))
    const response = yield call(get, 'users')
    yield put(fetchUsersSucceeded(response))
  } catch (error) {
    yield handleError(error)
    yield put(fetchUsersFailed(error))
  } finally {
    yield put(stopLayoutSpinner(FETCH_USERS_REQUESTED))
  }
}

const fetchUserSaga = function* ({ payload }) {
  try {
    yield put(startLayoutSpinner(FETCH_USER_REQUESTED))
    const response = yield call(get, `user/${payload.id}`)
    yield put(fetchUserSucceeded(response))
  } catch (error) {
    yield handleError(error)
    yield put(fetchUserFailed(error))
  } finally {
    yield put(stopLayoutSpinner(FETCH_USER_REQUESTED))
  }
}

const postUserSaga = function* ({ payload }) {
  try {
    yield put(startLayoutSpinner(POST_USERS_REQUESTED))
    const response = yield call(post, 'users', payload)
    yield put(postUserSucceeded(response))
  } catch (error) {
    yield handleError(error)
    yield put(postUserFailed(error))
  } finally {
    yield put(stopLayoutSpinner(POST_USERS_REQUESTED))
  }
}

const updateUserSaga = function* ({ payload }) {
  try {
    yield put(startLayoutSpinner(UPDATE_USER_REQUESTED))
    const updated = yield call(update, 'user', `${payload.id}`, payload)
    yield put(updateUserSucceeded(updated))
    notification.success({
      message: 'Success',
      description: `user with id ${payload.id} has been succesfully updated`
    })
  } catch (error) {
    yield handleError(error)
    yield put(updateUserFailed(error))
  } finally {
    yield put(stopLayoutSpinner(UPDATE_USER_REQUESTED))
  }
}

const deleteUserSaga = function* ({ payload }) {
  try {
    yield put(startLayoutSpinner(DELETE_USER_REQUESTED))
    const deleted = yield call(remove, 'user', `${payload.id}`)
    yield put(deleteUserSucceeded(deleted))
    notification.success({
      message: 'Success',
      description: `user with id ${payload.id} has been succesfully deleted`
    })
  } catch (error) {
    yield handleError(error)
    yield put(deleteUserFailed(error))
  } finally {
    yield put(stopLayoutSpinner(DELETE_USER_REQUESTED))
  }
}




export default [
  takeLatest(FETCH_USERS_REQUESTED, fetchUsersSaga),
  takeLatest(FETCH_USER_REQUESTED, fetchUserSaga),
  takeLatest(UPDATE_USER_REQUESTED, updateUserSaga),
  takeLatest(POST_USERS_REQUESTED, postUserSaga),
  takeLatest(DELETE_USER_REQUESTED, deleteUserSaga)
]