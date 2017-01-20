import axios from 'axios'
export function fetchInfo(){
  return{
    type:'FETCH_APP_INFO',
    payload:axios({
      method:'get',
      url:'https://api.github.com/orgs/GDGVIT'
    })
  }
}

export function getUsers(){
  return{
    type:'FETCH_USERS',
    payload:axios({
      method:'get',
      url:'https://api.github.com/orgs/GDGVIT/members'
    })
  }
}
