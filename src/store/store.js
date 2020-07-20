import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../redux'
import { rootSaga } from '../sagas'

export default function configureStore() {
  const isDevelopment = process.env.NODE_ENV === 'development'

  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const composer = isDevelopment ? composeWithDevTools : compose

  const store = createStore(
    rootReducer,
    composer(
      applyMiddleware(...middlewares)
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
