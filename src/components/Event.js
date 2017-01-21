import React from 'react'

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      members:[
        'rahulakrishna':1
      ]
    }
  }
  deducedCrime=(code)=>{
    switch (code) {
      case 'WatchEvent':
        return 'started watching'
        break
      case 'PushEvent':
        return 'pushed to'
      case 'ForkEvent':
        return 'forked'
        break
      case 'MemberEvent':
        return 'became a member of'
        break
      case 'CreateEvent':
        return 'created'
        break
      default:
        return code
        break
    }
  }
  render(){
    return(
      <div>
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>{this.props.culprit} {this.deducedCrime(this.props.crime)} {this.props.crimescene}</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
      </div>
    )
  }
}

export default Event
