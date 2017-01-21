import axios from 'axios'

export function fetchInfo(){
  return{
    type:'FETCH_APP_INFO',
    payload:axios({
      method:'get',
      url:'https://api.github.com/orgs/GDGVIT?client_id=e63b429174efcee3f453&client_secret=baf28b3b72e252c8d54180bfa0b9706e90caa33c'
    })
  }
}

export function getUsers(){
  return{
    type:'FETCH_USERS',
    payload:axios({
      method:'get',
      url:'https://api.github.com/orgs/GDGVIT/members?client_id=e63b429174efcee3f453&client_secret=baf28b3b72e252c8d54180bfa0b9706e90caa33c'
    })
  }
}


export function getEvents(){
  return{
    type:'FETCH_EVENTS',
    payload:axios({
      method:'get',
      url:'https://api.github.com/orgs/GDGVIT/events?client_id=e63b429174efcee3f453&client_secret=baf28b3b72e252c8d54180bfa0b9706e90caa33c'
    })
  }
}
