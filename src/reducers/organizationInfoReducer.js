const initialState={
  data:[],
  users:[],
  events:[],
  stats:[]
}

export default function reducer(state=initialState,action){
  switch (action.type) {
    case "FETCH_APP_INFO_FULFILLED":{
      return {...state,data:action.payload.data}
    }
    break
    case "FETCH_USERS_FULFILLED":{
      return {...state,users:action.payload.data}
    }
    break
    case "FETCH_EVENTS_FULFILLED":{
      return {...state,events:action.payload.data}
    }
    case "FETCH_GRAPH_EVENTS_FULFILLED":{
      return {...state,stats:action.payload.data}
    }
  }
  return state
}
