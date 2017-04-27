import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const logger = createLogger()

const persistedState = loadState();

export default function configureStore() {
  let store = createStore(
    reducers,
    persistedState,
    applyMiddleware(thunk, logger))
  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))
  return store
}
