import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router,Route,browserHistory,hashHistory,Redirect,IndexRoute} from 'react-router'

import OrganizationInfo from './components/OrganizationInfo'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

import store from './store'

injectTapEventPlugin()

class App extends React.Component{
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <AppBar
            title="GDG VIT Stats"
            iconElementLeft={<IconButton></IconButton>}
          />
        </MuiThemeProvider>
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={OrganizationInfo}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
