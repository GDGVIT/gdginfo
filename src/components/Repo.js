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
    const {topplayers}=this.props
    let playerList=[]
    topplayers.forEach((player)=>{
      if(playerList.indexOf(player.top)<0){
        playerList.push({name:player.top})
      }
    })
    let playerCountList=[]
    playerList.forEach((player)=>{
      let count=0
      topplayers.forEach((top)=>{
        if(player.name==top.top){
          count=count+1
        }
      })
      playerCountList.push({name:player.name,count:count})
    })
    let finalList=[]
    console.log(topplayers)
    const sortedPlayers=topplayers.sort((a,b)=>{
      const nameA=a.top.toUpperCase()
      const nameB=b.top.toUpperCase()
      if(nameA<nameB){
        return -1
      }
      else if(nameA>nameB){
        return 1
      }
      return 0
    })
    let reposCounted=[]
    sortedPlayers.forEach((repo)=>{
      playerCountList.forEach((player)=>{
        if(player.name==repo.top && reposCounted.indexOf(repo.repo)<0){
          finalList.push({name:player.name,repo:repo.repo,count:player.count})
          reposCounted.push(repo.repo)
        }
      })
    })
    console.log(finalList)
    const finalSortedList=finalList.sort((a,b)=>{
      console.log(a.name,b.name,b.count-a.count)
      if(a.count!=b.count){
        return b.count-a.count
      }
      else{
        const nameA=a.name.toUpperCase()
      const nameB=b.name.toUpperCase()
      if(nameA<nameB){
        return -1
      }
      else if(nameA>nameB){
        return 1
      }
    }
    return 0
    })
    const mappedRepos=finalSortedList.map((player)=>
      <tr key={player.repo}><td>{player.repo}</td><td>{player.name}</td></tr>
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