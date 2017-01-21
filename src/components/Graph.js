import React from 'react'

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
  }
  render(){
    console.log(this.state.events);
    console.log(this.props);
    return(
      <div>
        <h1>This is from Graph!</h1>
      </div>
    )
  }
}

export default Graph
