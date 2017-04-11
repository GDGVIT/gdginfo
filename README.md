## GDG VIT Vellore Info

# Stack used

+ React
+ Redux
+ Express
+ Webpack

# To run
Before running create a `.env` file containing `client_secret=xxxx cliend_id=xxxxxx` using the values obtained from GitHub.

Either go to https://info.gdgvitvellore.com

or clone the repo and run `npm install` && `npm start`

# File description
The server is configured in `/server/main.js`.

All the frontend files are located in `/src/`

+ `/src/components/OrganizationInfo.js` - This is the root component. All the other render into it.
+ `/src/components/Event.js` - Renders a list of the past 30 events from GitHub
+ `/src/components/Graph.js` - Renders the graph.
+ `/src/components/Repo.js` -  Contains all the basic information including the most active person.
+ `/src/components/Leaderboard.js` - A Leaderboard based on the weekly activity of members

# Screenshots
![Alt text](/screenshots/screenshot1.PNG?raw=true "Screenshot 1")
![Alt text](/screenshots/screenshot2.PNG?raw=true "Screenshot 2")
![Alt text](/screenshots/screenshot3.PNG?raw=true "Screenshot 3")