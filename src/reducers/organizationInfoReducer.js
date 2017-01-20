const initialState={
  data:[],
  users:[]
}

export default function reducer(state=initialState,action){
  switch (action.type) {
    case "FETCH_APP_INFO_FULFILLED":{
      return {...state,data:action.payload.data}
    }
    case "FETCH_USERS_FULFILLED":{
      return {...state,users:action.payload.data}
    }
    break
  }
  return state
}
