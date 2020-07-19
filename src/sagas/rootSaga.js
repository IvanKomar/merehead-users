import { all } from 'redux-saga/effects'
import users from './users'

function* rootSaga() {
  return yield all([
    ...users,
  ])
}

export default rootSaga
