
import React from 'react'
class Repo extends React.Component {
  render(){
    console.log('Repos:',this.props.repos);
    const mappedRepos=this.props.repos.map(repo=>{
      <h1>{repo.name}</h1>
    })
    return(
      <div>
        {mappedRepos}
      </div>
    )
  }
}

export default Repo

{/* <Repo repos={repos}/> */}
