const initialState={
  data:[],
  users:[],
  events:[],
  stats:[],
  repos:[],
  leaderboard:[],
  topplayers:[]
}

export default function reducer(state=initialState,action){
  switch (action.type) {
    case "FETCH_APP_INFO_FULFILLED":{
      return {...state,data:action.payload.data }
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
    case "FETCH_REPOS_FULFILLED":{
      return {...state,repos:action.payload.data}
    }
    case "FETCH_LEADERBOARD_FULFILLED":{
      return {...state,leaderboard:action.payload.data}
    }
    case "FETCH_TOP_PLAYERS_FULFILLED":{
      return {...state,topplayers:action.payload.data}
    }
  }
  return state
}
