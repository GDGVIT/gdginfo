import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo,getUsers} from '../actions/organizationInfoActions'

@connect((store)=>{
  return{
    organizations:store.organizationsInfo.data,
    members:store.organizationsInfo.users
  }
})
class OrganizationInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      organizations:[]
    }
  }
  componentWillMount(){
    this.props.dispatch(fetchInfo())
    this.props.dispatch(getUsers())
    console.log(this.props)
  }
  render(){
    console.log('Hello World!')
    console.log(this.props.organizations)
    const {organizations,members}=this.props
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
      }
    }
    console.log(members);
    const mappedMembers=members.map(member=>
      <div className="col s3"><div className="card"><div className="card-image"><img src={member.avatar_url}/><div className="card-title" style={styles.customCardTitle}>{member.login}</div></div></div></div>
    )
    return(
      <div>
        <div className="center">
          <img src={organizations.avatar_url} style={styles.image}/>
          <br/>
          <h3>{organizations.description}</h3>
          <h4>{organizations.location}</h4>
        </div>
        <div className="row center">
          <div className="col s3">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title">{organizations.public_repos}</div>
            <div className="card-content">Public Repos</div>
          </div>
        </div>
          <div className="col s3">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title">{organizations.public_gists}</div>
            <div className="card-content">Public Gists</div>
          </div>
        </div>
          <div className="col s3">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title" style={{fontSize:'20px'}}>{organizations.blog}</div>
            <div className="card-content">Website</div>
          </div>
        </div>
          <div className="col s3">
          <div className="card" style={styles.descriptionCard}>
            <div className="card-title" style={{fontSize:'20px'}}>{organizations.email}</div>
            <div className="card-content">Email</div>
          </div>
        </div>
        </div>

        {/*The List of Members to be followed*/}
        <div className="row">
          <h1 className="center">Members</h1>
          {mappedMembers}
        </div>
      </div>
    )
  }
}

export default OrganizationInfo
