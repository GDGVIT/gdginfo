import React from 'react'
import {connect} from 'react-redux'

import {fetchLeaderboard} from '../actions/organizationInfoActions'

@connect((store)=>{
    return{
        leaderboard:store.organizationsInfo.leaderboard
    }
})
class Leaderboard extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchLeaderboard())
    }
    render(){
        console.log(this.props.leaderboard)
        return(
            <h1>Leaderboard</h1>
        )
    }
}

export default Leaderboard