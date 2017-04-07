import React from 'react'
import {getUsers} from '../actions/organizationInfoActions'
import {connect} from 'react-redux'
import '../styles/Members.scss'

@connect((store)=>{
  return{
    members:store.organizationsInfo.users,
  }
})
class Members extends React.Component {
  componentDidMount(){
    this.props.dispatch(getUsers())
  }
  render(){
    console.log(this.props.members)
    const members=this.props.members.map((member)=>
      <li className="list-group-item" key={member.login}><img src={member.avatar_url} className="avatar"/><a href={member.html_url}>{member.login}</a></li>
    )
    return(
      <div>
        <div class="content">
            <div class="container-fluid">
              <div class="row">
                    <div class="col-md-12">
                        <div class="card leader-card">
                            <div class="header">
                                <h4 class="title">Members</h4>
                                <p class="category">Who make GDGVIT awesome!</p>
                            </div>
                            <div class="content table-responsive">
                              <ul className="list-group">
                                {members}
                              </ul>
                            </div>
                            </div>
                                <div class="footer">
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
      </div>
    )
  }
}

export default Members
