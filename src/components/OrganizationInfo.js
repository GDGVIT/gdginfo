import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo,getUsers,getEvents} from '../actions/organizationInfoActions'
import {addStat} from '../actions/statsActions'
import Graph from './Graph'
import Event from './Event'

@connect((store)=>{
  return{
    organizations:store.organizationsInfo.data,
    members:store.organizationsInfo.users,
    events:store.organizationsInfo.events,
    stats:store.organizationsInfo.stats
  }
})
class OrganizationInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      organizations:this.props.organizations,
      members:this.props.members,
      events:this.props.events,
      first:{
        position:'absolute',
        top:'0px',
        width:'100%',
        left:'0'
      },
      second:{
        position:'absolute',
        top:'0px',
        width:'100%',
        left:'100%'
      },
      third:{
        position:'absolute',
        top:'0px',
        width:'100%',
        left:'200%'
      }
    }
  }
  componentWillMount(){
    console.log(this.props)
  }
  componentDidMount(){
    this.props.dispatch(fetchInfo())
    this.props.dispatch(getUsers())
    this.props.dispatch(getEvents())
    $('.collapsible').collapsible();
    this.props.members.map(member=>{
      this.props.dispatch(addStat(member.login))
    })
  }
  graph(){
    for (var i = 0; i < this.props.events.length; i++) {
      console.log(this.props.events[i])
    }
  }
  addStat=()=>{
    this.props.members.map(member=>{
      this.props.dispatch(addStat(member.login,(stats.member.login.value+1)))
    })
  }
  displayMembers=()=>{
    const {members}=this.props
    return members[i].login
  }
  prevEvent=()=>{
    if(this.state.second.left=='0'){
      this.setState({
        first:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'0',
          transition:'all 0.5s'
        },
        second:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'100%',
          transition:'all 0.5s'
        }
      })
    }
    else if(this.state.third.left=='0'){
      this.setState({
        third:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'100%',
          transition:'all 0.5s'
        },
        second:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'0',
          transition:'all 0.5s'
        }
      })
    }
  }
  nextEvent=()=>{
    if(this.state.first.left=='0'){
      this.setState({
        first:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'-100%',
          transition:'all 0.5s'
        },
        second:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'0',
          transition:'all 0.5s'
        }
      })
    }
    else if(this.state.second.left=='0'){
      this.setState({
        second:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'-100%',
          transition:'all 0.5s'
        },
        third:{
          position:'absolute',
          top:'0px',
          width:'100%',
          left:'0',
          transition:'all 0.5s'
        }
      })
    }
  }
  render(){
    const {organizations,members,events}=this.props
    const styles={
      image:{
        width:'200px'
      },
      descriptionCard:{
        height:'120px'
      },
      customCardTitle:{
        background:'rgba(0,0,0,0.5)',
        width:'100%'
      },
      collectionHeader:{
        fontSize:'24px',
        marginTop:'50px'
      }
    }
    const mappedMembers=members.map(member=>
          <li class="collection-item avatar col m4 s12" key={member.id} style={{marginTop:'30px'}}>
            <img src={member.avatar_url} alt="" class="circle"/>
            <span class="title" style={styles.collectionHeader}>{member.login}</span>
            <a href="#!" class="secondary-content"><i class="material-icons"></i></a>
          </li>
    )
    const mappedEvents=events.map(event=>
      <Event key={event.id}
        crime={event.type}
        culprit={event.actor.login}
        crimescene={event.repo.name}
        sentence={event.type=='PushEvent'?event.payload.commits:''}
      />
    )
    const firstEvents=mappedEvents.slice(0,9);
    const secondEvents=mappedEvents.slice(10,19);
    const thirdEvents=mappedEvents.slice(20,29);
    console.log(events);
    console.log('Paginated members: ',this.displayMembers);
    return(
      <div>
        <div className="center">
          <img src={organizations.avatar_url} style={styles.image} className="circle"/>
          <br/>
          <h3>{organizations.description}</h3>
          <h4>{organizations.location}</h4>
        </div>
        <div className="row center">
          <div className="col m3 s12">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title">{organizations.public_repos}</div>
            <div className="card-content">Public Repos</div>
          </div>
        </div>
          <div className="col m3 s12">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title">{organizations.public_gists}</div>
            <div className="card-content">Public Gists</div>
          </div>
        </div>
          <div className="col m3 s12">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title" style={{fontSize:'20px'}}>{organizations.blog}</div>
            <div className="card-content">Website</div>
          </div>
        </div>
          <div className="col m3 s12">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title" style={{fontSize:'20px'}}>{organizations.email}</div>
            <div className="card-content">Email</div>
          </div>
        </div>
        </div>

        {/*The List of Members to be followed*/}
        <div className="row">
        </div>
        <div className="row">
          <h1 className="center">Recent Activity</h1>
            <div className="col s12 m5 push-m1" style={{overflow:'hidden',padding:'10px',height:'500'}}>
            <ul className="col s12 card collapsible" data-collapsible="accordion" style={this.state.first}>
              {firstEvents}
            </ul>
            <ul className="col s12 card collapsible" data-collapsible="accordion" style={this.state.second}>
              {secondEvents}
            </ul>
            <ul className="col s12 card collapsible" data-collapsible="accordion" style={this.state.third}>
              {thirdEvents}
            </ul>
              <ul className="pagination center col s12" style={{position:'absolute',bottom:'10px'}}>
                <li className="waves-effect" onClick={this.prevEvent}><i className="material-icons">chevron_left</i></li>
                <li className="waves-effect" onClick={this.nextEvent}><i className="material-icons">chevron_right</i></li>
              </ul>

            </div>
          <div className="col m5 push-m1 s12">
            <Graph/>
          </div>
        </div>

        <div className="row">
          <h1 className="center">Members</h1>
          <ul className="collection col m10 push-m1 s12">
            {mappedMembers}
          </ul>
        </div>

      </div>
    )
  }
}

export default OrganizationInfo

// List of repo and top contributor
