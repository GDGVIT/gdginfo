import axios from 'axios'

export function fetchInfo(){
  return{
    type:'FETCH_APP_INFO',
    payload:axios({
      method:'get',
      url:'/info'
    })
  }
}

export function getUsers(){
  return{
    type:'FETCH_USERS',
    payload:axios({
      method:'get',
      url:'/users'
    })
  }
}


export function getEvents(){
  return{
    type:'FETCH_EVENTS',
    payload:axios({
      method:'get',
      url:'/events'
    })
  }
}
