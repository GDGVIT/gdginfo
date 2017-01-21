import React from 'react'

class Graph extends React.Component {
  constructor(props) {
    super(props)
    console.log('Hi from Graph!');
    console.log(this.props.events);
    this.state={
      events:this.props.events
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  componentWillMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>
        <h1>This is from Graph!</h1>
      </div>
    )
  }
}

export default Graph
