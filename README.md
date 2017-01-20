# WdyW Frontend

This is the frontend repository for wdyw.co.in (What do you want?)

It's prefarable to maintain a text file as well, with the details of your code.

A separate folder for design should be maintained.

# Stack used:
* React
* Redux

# Bp

`npm install && npm run localstart`
`start` is configured to compile and deploy apps for heroku. So run `localstart` to run locally.

**Important**:
The 43rd line of `webpack.config.js`,with the key `publicPath` and default value `http://127.0.0.1:3000/public` tells the browser were to look for static files. That is because, React is having trouble finding files from the relative path. Change the value to the `domain_name/public`. It will be `http://127.0.0.1:3000/public` while running locally

# To deploy
Run `npm compile` the output will be inside `/dist` folder. Deploy it to some static web server like nginx or apache.
This method of deployment will crash if gone to inner links directly. (Say you directly go to `wdyw.com/login` it won't work). In order to make it work, You have to set up reverse proxy.
See https://www.techandme.se/set-up-nginx-reverse-proxy/ for nginx.

