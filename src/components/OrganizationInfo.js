import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo,getUsers,getEvents,fetchRepos} from '../actions/organizationInfoActions'
import Graph from './Graph'
import Event from './Event'
import Repo from './Repo'
import Members from './Members'
import '../styles/Main.scss'

@connect((store)=>{
  return{
    organizations:store.organizationsInfo.data,
    members:store.organizationsInfo.users,
    events:store.organizationsInfo.events,
    stats:store.organizationsInfo.stats,
    repos:store.organizationsInfo.repos
  }
})
class OrganizationInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      organizations:this.props.organizations,
      members:this.props.members,
      events:this.props.events
    }
  }
  componentWillMount(){
    console.log(this.props)
  }
  componentDidMount(){
    this.props.dispatch(fetchInfo())
    this.props.dispatch(getUsers())
    this.props.dispatch(getEvents())
    this.props.dispatch(fetchRepos())
  }
  graph(){
    for (var i = 0; i < this.props.events.length; i++) {
      console.log(this.props.events[i])
    }
    }
  displayMembers=()=>{
    const {members}=this.props
    return members[i].login
  }
  render(){
    const {organizations,members,events,repos}=this.props
    console.log(members)
    const mappedMembers=members.map(member=>
          <li class="collection-item avatar col m2 s12" key={member.id} style={{marginTop:'30px'}}>
            <img src={member.avatar_url} alt="" class="circle"/>
            <span class="title">{member.login}</span>
            <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
          </li>
    )
    const mappedEvents=events.map(event=>
      <Event key={event.id}
        crime={event.type}
        culprit={event.actor.login}
        crimescene={event.repo.name}
        sentence={event.type=='PushEvent'?event.payload.commits:''}
        parole={event.type=='IssuesEvent'?event.payload.action:''}
      />
    )
    const firstEvents=mappedEvents.slice(0,9);
    const secondEvents=mappedEvents.slice(10,19);
    const thirdEvents=mappedEvents.slice(20,29);
    console.log(events);
    console.log('Paginated members: ',this.displayMembers);
    return(
      <div className="container-fluid">

        {/*<div className="row">
          <h1 className="center">The Team</h1>
          <ul className="collection col m10 push-m1 s12">
            {mappedMembers}
          </ul>
        </div>*/}

        {/*<Members/>*/}

        <div class="content">
            <div class="container-fluid">
                <div class="row">
                      <div class="col-md-4">
                          <div class="card glance-card">
                              <div class="header">
                                  <h4 class="title">At a Glance</h4>
                                  <p class="category">From GitHub</p>
                              </div>
                              <div class="content">
                                  <div className="col-xs-12 info-cards">
                                    <b><u>Public Repos</u></b><br/>
                                    {organizations.public_repos}<br/><br/>
                                  </div>
                                  <div className="col-xs-12 info-cards">
                                    <b><u>Public Gists: </u></b><br/>
                                    {organizations.public_gists}<br/><br/>
                                  </div>
                                  <div className="col-xs-12 info-cards">
                                    <b><u>Website: </u></b><br/>
                                    {organizations.blog}<br/><br/>
                                  </div>
                                  <div className="col-xs-12 info-cards">
                                    <b><u>Email: </u></b><br/>
                                    {organizations.email}<br/><br/>
                                  </div>
                              </div>
                              </div>
                                  <div class="footer">
                                  </div>
                              </div>

                    <div class="col-md-8">
                        <div class="card">
                            <div class="header">
                                <h4 class="title">User Performance</h4>
                                <p class="category">Based on the last 30 events</p>
                            </div>
                            <div class="content">
                                <div>
                                  <Graph events={events}/>
                                </div>
                                <div class="footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <div class="row">
                    <div class="col-md-6">
                        <div class="card ">
                            <div class="header">
                                <h4 class="title">Key People</h4>
                                <p class="category">Those who make it happen</p>
                            </div>
                            <div class="content">


                                <div class="footer">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card ">
                            <div class="header">
                                <h4 class="title">Key Projects</h4>
                                <p class="category">The flagships</p>
                            </div>
                            <div class="content">


                                <div class="footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
      </div>
    )
  }
}

export default OrganizationInfo

// List of repo and top contributor
