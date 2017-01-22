const initialState={
  data:{
    key:'rahulakrishna',
    value:10
  }
}

export default function reducer(state=initialState,action) {
  switch (action.type) {
    case 'ADD_STAT':
      return {...state,data:{key:action.payload.key,value:action.payload.value}}
      break;
    default:
      return state
  }
  return state
  console.log(state);
}
