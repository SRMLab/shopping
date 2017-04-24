import { combineReducers } from 'redux'
import inventory from './inventory'
import itemImages from './itemImages'

const rootReducer = combineReducers({
  inventory,
  itemImages
})

export default rootReducer
