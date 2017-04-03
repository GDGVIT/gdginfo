import React from 'react'
import {connect} from 'react-redux'

import {fetchLeaderboard} from '../actions/organizationInfoActions'
import {Pie} from 'react-chartjs-2';

@connect((store)=>{
    return{
        leaderboard:store.organizationsInfo.leaderboard
    }
})
class Leaderboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            leaders:this.props.leaderboard
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchLeaderboard())
    }
    render(){
        const {leaderboard}=this.props
        const leaders=leaderboard.map((leader)=>{
            return leader.name
        })
        const scores=leaderboard.map((leader)=>{
            return leader.score
        })
        console.log(leaders,scores)
        const data = {
            labels:leaders,
            datasets: [{
                data: scores,
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        }
        const options={
            legend: {
                display: false
            }
        }
        const sortedLeaders=leaderboard.sort((a,b)=>{
            return b.score-a.score
        })
        const mappedLeaders=sortedLeaders.map((leader)=>
            <tr key={leader.name} className="leader-row"><td>{leader.name}</td><td>{leader.score}</td></tr>
        )
        console.log(mappedLeaders)
        return(
            <div class="content">
            <div class="container-fluid">
              <div class="row">
                    <div class="col-md-12">
                        <div class="card leader-card">
                            <div class="header">
                                <h4 class="title">Leaderboard</h4>
                                <p class="category">Calculated using data from GitHub</p>
                            </div>
                            <div class="content table-responsive">
                                <Pie data={data} options={options}/>
                              <table className="table table-bordered table-stripped">
                                <tbody>
                                  {mappedLeaders}
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

export default Leaderboard