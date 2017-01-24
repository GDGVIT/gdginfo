## GDG VIT Vellore Info

# Stack used

+ React
+ Redux
+ Express
+ Webpack

# To run
Either go to https://gdginfo.herokuapp.com/

or clone the repo and run `npm install` && `npm start`

# File description

The server is configured in `/server/main.js`.

All the frontend files are located in `/src/`

+ `/src/components/OrganizationInfo.js` - This is the root component. All the other render into it.
+ `/src/components/Event.js` - Renders a list of the past 30 events from GitHub
+ `/src/components/Graph.js` - Renders the graph.
+ `/src/components/Repo.js` - A page for every repo. Must contain all the basic information including the most active person.
+ `/src/components/User.js` - A page for every user. Must contain his/her contribution to the organization.
