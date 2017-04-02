import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {fetchInfo,getUsers,getEvents,fetchRepos} from '../actions/organizationInfoActions'

@connect((store)=>{
  return{
    organizations:store.organizationsInfo.data
  }
})

class Navbar extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      organizations:this.props.organizations
    }
  }
  componentDidMount(){
    this.props.dispatch(fetchInfo())
  }
  render(){
    const {organizations}=this.props
    return(
      <a class="navbar-brand" href="#">{organizations.name}, {organizations.location}</a>
    )
  }
}

export default Navbar
