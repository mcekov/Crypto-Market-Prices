import allLinesReducer from './allLinesReducer'
import allFilterReducer from './allFilterReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  allLines: allLinesReducer,
  filter: allFilterReducer,
})

export default allReducers
