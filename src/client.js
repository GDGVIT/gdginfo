import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router,Route,browserHistory,hashHistory,Redirect,IndexRoute} from 'react-router'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import OrganizationInfo from './components/OrganizationInfo'
import RecentActivities from './components/RecentActivities'
import Leaderboard from './components/Leaderboard'
import Members from './components/Members'
import Repo from './components/Repo'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'



import store from './store'

injectTapEventPlugin()


class App extends React.Component{
  render(){
    const fullurl=window.location.href.split('/')
    const url=fullurl[4]
    console.log("Location:"+url[4]);
    return(
      <div>
        <div class="wrapper">
        <div class="sidebar" data-color="green" data-image="assets/img/sidebar-5.jpg">
    <div class="sidebar-wrapper">
        <div class="logo">
            <a href="http://www.gdgvitvellore.com" class="simple-text">
              <img src="assets/img/logo_white.png" class="sidenav-logo"/>
          </a>
      </div>

      <ul class="nav">
        <li className={url==''?'active':''}>
            <a href="#">
                <i class="pe-7s-graph"></i>
                <p>Profile</p>
            </a>
        </li>
        <li className={url=='recent'?'active':''}>
            <a href="#/recent">
                <i class="pe-7s-user"></i>
                <p>Recent Activities</p>
            </a>
        </li>
        <li className={url=='leaderboard'?'active':''}>
            <a href="#/leaderboard">
                <i class="pe-7s-note2"></i>
                <p>Leaderboard</p>
            </a>
        </li>
        <li className={url=='repos'?'active':''}>
            <a href="#/repos">
                <i class="pe-7s-news-paper"></i>
                <p>All Repositories</p>
            </a>
        </li>
        <li className={url=='members'?'active':''}>
            <a href="#/members">
                <i class="pe-7s-news-paper"></i>
                <p>Members</p>
            </a>
        </li>
    </ul>
</div>
</div>

<div class="main-panel">
    <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <Navbar/>
            </div>
            <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
					<li class="navbar-social-li">
							<a href="https://github.com/gdgvit">
									<i class="fa fa-github"></i>
							</a>
					</li>
					<li class="navbar-social-li">
						<a href="#">
							<i class="fa fa-facebook"></i>
						</a>
					</li>
					<li class="navbar-social-li">
						<a href="#">
							<i class="fa fa-google-plus"></i>
						</a>
					</li>
				</ul>
</div>
</div>
</nav>


{this.props.children}


<footer class="footer">
    <div class="container-fluid">
        <nav class="pull-left">
            <ul>
                <li class="navbar-social-li">
                    <a href="http://gdgvitvellore.com">
                        Home
                    </a>
                </li>
                <li class="navbar-social-li">
                    <a href="https://facebook.com/gdgvitvellore">
                        Facebook
                    </a>
                </li>
                <li class="navbar-social-li">
                    <a href="https://github.com/gdgvit">
                        GitHub
                    </a>
                </li>
                <li class="navbar-social-li">
                    <a href="https://blog.gdgvitvellore.com">
                     Blog
                 </a>
             </li>
         </ul>
     </nav>
     <p class="copyright pull-right">
        &copy; 2017 <a href="http://www.gdgvitvellore.com">Google Developers Group</a>, made with love for a better web
    </p>
</div>
</footer>
</div>
</div>
</div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={OrganizationInfo}/>
        <Route path="recent" component={RecentActivities}/>
        <Route path="leaderboard" component={Leaderboard}/>
        <Route path="members" component={Members}/>
        <Route path="repos" component={Repo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
