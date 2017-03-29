import axios from 'axios'

export function fetchInfo(){
  return{
    type:'FETCH_APP_INFO',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/info'
    })
  }
}

export function getUsers(){
  return{
    type:'FETCH_USERS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/users'
    })
  }
}


export function getEvents(){
  return{
    type:'FETCH_EVENTS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/events'
    })
  }
}

export function fetchGraphEvents(){
  return{
    type:'FETCH_GRAPH_EVENTS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/eventsGraph'
    })
  }
}

export function fetchRepos(){
  return{
    type:'FETCH_REPOS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/repos'
    })
  }
}
