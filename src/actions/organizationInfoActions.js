import axios from 'axios'

export function fetchInfo(){
  return{
    type:'FETCH_APP_INFO',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/info',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function getUsers(){
  return{
    type:'FETCH_USERS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/users',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}


export function getEvents(){
  return{
    type:'FETCH_EVENTS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/events',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function fetchGraphEvents(){
  return{
    type:'FETCH_GRAPH_EVENTS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/eventsGraph',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function fetchRepos(){
  return{
    type:'FETCH_REPOS',
    payload:axios({
      method:'get',
      url:'https://gdginfo.herokuapp.com/repos',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function fetchLeaderboard(){
  return{
    type:'FETCH_LEADERBOARD',
    payload:axios({
      method:'get',
      url:'https://radiant-harbor-42641.herokuapp.com/leaderboard',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}