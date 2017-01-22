import React from 'react'
import {connect} from 'react-redux'
import {fetchGraphEvents} from '../actions/organizationInfoActions'
import {Bar} from 'react-chartjs-2'

@connect((store)=>{
  return{
    stats:store.organizationsInfo.stats
  }
})
class Graph extends React.Component {
  constructor(props) {
    super(props)
    console.log('Hi from Graph!');
    console.log(this.props.events);
    this.state={
      events:props.events
    }
  }
  componentDidMount(){
    console.log(this.state.events);
    console.log(this.props);
    this.setState({
      events:this.props.events
    })
  }
  componentWillMount(){
    console.log(this.state)
    console.log(this.props);
    this.setState({
      events:this.props.events
    })
    this.props.dispatch(fetchGraphEvents())
  }
  render(){
    // const names=this.props.stats.name.map(names=>{
    //   return names
    // })
    // const values=this.props.stats.count.map(counts=>{
    //   return counts
    // })
    let names=[]
    let count=[]
    this.props.stats.map((stat)=>{
      names.push(stat.name)
      count.push(stat.count)
    })
    console.log(names);
    console.log(count);
    const data={
      labels:names,
      datasets:[
        {
          label:'GDG',
          data:count
        }
      ]
    }
    return(
      <div>
        <Bar
          data={data}
          width={100}
          height={50}
        />
      </div>
    )
  }
}

export default Graph
