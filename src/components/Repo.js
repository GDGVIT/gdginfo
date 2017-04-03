import React from 'react'
import {fetchTopPlayers} from '../actions/organizationInfoActions'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    topplayers:store.organizationsInfo.topplayers
  }
})
class Repo extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchTopPlayers())
  }
  render(){
    console.log(this.props.topplayers)
    const {topplayers}=this.props
    const sortedPlayers=topplayers.sort((a,b)=>{
      const nameA=a.repo.toUpperCase()
      const nameB=b.repo.toUpperCase()
      if(nameA<nameB){
        return -1
      }
      else if(nameA>nameB){
        return 1
      }
      return 0
    })
    const mappedRepos=sortedPlayers.map((player)=>
      <tr key={player.repo}><td>{player.repo}</td><td>{player.top}</td></tr>
    )
    return(
      <div>
        <div class="content">
            <div class="container-fluid">
              <div class="row">
                    <div class="col-md-12">
                        <div class="card leader-card">
                            <div class="header">
                                <h4 class="title">Repositories</h4>
                                <p class="category">And their top contributor</p>
                            </div>
                            <div class="content table-responsive">
                              <table className="table table-bordered table-stripped">
                                <tbody>
                                  {mappedRepos}
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
      </div>
    )
  }
}

export default Repo