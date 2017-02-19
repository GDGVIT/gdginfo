import {applyMiddleware,createStore} from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducers from './reducers/'
import {loadState,saveState} from './localStorage'

const middleware=applyMiddleware(promise(),thunk,logger())

const persistedState=loadState()

const store=createStore(reducers,persistedState,middleware)

export default store


store.subscribe(()=>{
  saveState({
    organizationsInfo:store.getState().organizationInfoReducer,
    stats:store.getState().statsReducer
  })
})
