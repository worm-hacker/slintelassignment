## /main folder

* `/app` contains all our node mvc code
* `/client` client code
* `/config` database cofig
* `package.json`  defines our dependencies
* `server.js` node server code

To run application - `npm start`

## /client Folder

* `client/app.js` contains all our cool JavaScript code
* `client/package.json` defines our dependencies
* `client/scss/main.scss` is our scss / sass entry point
* `client/webpack.config.js` is our config that tells webpack what to do

```
├── app.js
├── dist
│   ├── bundle.js
│   └── main.bundle.css
├── package.json
├── scss
│   ├── about
│   │   └── about.scss
│   └── main.scss
├── webpack.config.js
```
(inside client folder then use below command)

To prepare build `npm run build` 

## Steps to run project
### step 1 :- clone the project 
### step 2 :- `npm i` (in main cloned folder)
### step 3 :- open client folder
### step 4 :- in cmd of client folder run `npm i`
### step 5 :- in cmd of client folder run `npm run build`
### step 6 :- go to main folder(cloned folder) and run `npm start`
