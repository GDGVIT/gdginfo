import {combineReducers} from 'redux'

import organizationInfoReducer from './organizationInfoReducer'
import statsReducer from './statsReducer'

export default combineReducers({
  organizationsInfo:organizationInfoReducer,
  stats:statsReducer
})
