import React from 'react'

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      members:[
        'rahulakrishna':1,
      ],
      activityCount:{},
      commitmessage:''
    }
  }
  deducedCrime=(code)=>{
    switch (code) {
      case 'WatchEvent':
        return 'started watching'
        break
      case 'PushEvent':
        return 'pushed to'
        break
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
  commitMessage=(sentence,culprit,crime,scene)=>{
    if(sentence){
      return '<div class="collapsible-header"><i class="material-icons">filter_drama</i>'+culprit+' '+crime+' '+scene+'</div><div class="collapsible-body">'+sentence.map(s=>s.message)+'</div>'
    }
    else {
      return '<div class="collapsible-header"><i class="material-icons">filter_drama</i>'+culprit+' '+crime+' '+scene+'</div>'
    }
  }
  render(){
    // console.log(this.props.sentence);
    // console.log(this.state.activityCount);
    return(
          // <li>
          //   <div class="collapsible-header">
          //     <i class="material-icons">filter_drama</i>
          //     {this.props.culprit} {this.deducedCrime(this.props.crime)} {this.props.crimescene}
          //   </div>
          //   <span dangerouslySetInnerHTML={{__html:this.commitMessage(this.props.sentence)}}></span>
          // </li>
          <li dangerouslySetInnerHTML={{__html:this.commitMessage(this.props.sentence,this.props.culprit,this.deducedCrime(this.props.crime),this.props.crimescene)}}>

          </li>
    )
  }
}

export default Event
