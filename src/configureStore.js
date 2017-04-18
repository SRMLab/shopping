import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger()

export default function configureStore() {
  let store = createStore(reducers, applyMiddleware(thunk, logger))
  return store
}
