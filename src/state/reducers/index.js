import allLinesReducer from './allLinesReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  allLines: allLinesReducer,
})

export default allReducers
