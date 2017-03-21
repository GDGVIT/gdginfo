'use strict'
const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')
const axios=require('axios')

const app = express()

require('dotenv').config()


// API Calls follow
app.get('/info',function(req,res){
    axios.get('https://api.github.com/orgs/GDGVIT?client_id='+process.env.client_id+'&client_secret='+process.env.client_secret)
    .then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      console.error(error);
    })
})

app.get('/users',function(req,res){
axios.get('https://api.github.com/orgs/GDGVIT/members?client_id='+process.env.client_id+'&client_secret='+process.env.client_secret)
.then(function(response){
  res.send(response.data);
}).catch(function(error){
  console.error(error);
})
})

app.get('/events',function(req,res){
axios.get('https://api.github.com/orgs/GDGVIT/events?client_id='+process.env.client_id+'&client_secret='+process.env.client_secret)
.then(function(response){
res.send(response.data);
})
.catch(function(error){
  console.error(error);
})
})

app.get('/eventsGraph',function(req,res){
  axios.get('https://api.github.com/orgs/gdgvit/events?client_id=e63b429174efcee3f453&client_secret=baf28b3b72e252c8d54180bfa0b9706e90caa33c')
  .then(function(response){
    let uniquename=[]
    response.data.forEach(function(x){
      if(uniquename.indexOf(x.actor.login)<0 && x.type!='WatchEvent'){
        uniquename.push(x.actor.login)
      }
    })
    let result=[]
    uniquename.forEach(function(name){
      let count=0
      response.data.forEach(function(data){
        if(data.actor.login==name && data.type!='WatchEvent'){
          count=count+1
        }
      })
      result.push({name:name,count:count})
    })
    return Promise.resolve(result)
  })
  .then(function(result){
    console.log(result);
    res.send(result)
  })
  .catch(function(error){
    console.error(error);
  })
})

app.get('/repos',function(req,res){
  axios.get('https://api.github.com/orgs/gdgvit/repos?client_id=e63b429174efcee3f453&client_secret=baf28b3b72e252c8d54180bfa0b9706e90caa33c')
  .then((response)=>{
    res.send(response.data);
  })
  .catch((error)=>{
    console.error(error);
  })
})

// Apply gzip compression
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))

  app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

  // app.use(express.static(path.join(__dirname, '..', 'app')));

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('/*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
}

module.exports = app

// A list of repos and the top contributor
// Design changes
// Leaderboard - Top contributor in the organization.
