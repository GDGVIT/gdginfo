import React from 'react'
import {getEvents} from '../actions/organizationInfoActions'
import {connect} from 'react-redux'
import Event from './Event'

@connect((store)=>{
  return{
    events:store.organizationsInfo.events
  }
})
class RecentActivities extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      events:this.props.events
    }
  }
  componentDidMount(){
    this.props.dispatch(getEvents())
  }
  render(){
    const {events}=this.props
    const mappedEvents=events.map(event=>
      <Event key={event.id}
        crime={event.type}
        culprit={event.actor.login}
        crimescene={event.repo.name}
        sentence={event.type=='PushEvent'?event.payload.commits:''}
        parole={event.type=='IssuesEvent'?event.payload.action:''}
      />
    )
    return(
      <div class="content">
          <div class="container-fluid">
              <div class="row">
                    <div class="col-md-12">
                        <div class="card glance-card">
                            <div class="header">
                                <h4 class="title">Recent Activities</h4>
                                <p class="category">From GitHub</p>
                            </div>
                            <div class="content table-responsive">
                              <table className="table table-bordered table-stripped">
                                <tbody>
                                  {mappedEvents}
                                </tbody>
                              </table>
                            </div>
                            </div>
                                <div class="footer">
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
    )
  }
}

export default RecentActivities
