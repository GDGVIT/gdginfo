import {combineReducers} from 'redux'

import organizationInfoReducer from './organizationInfoReducer'

export default combineReducers({
  organizationsInfo:organizationInfoReducer
})
