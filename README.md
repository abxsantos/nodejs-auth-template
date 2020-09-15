# NodeJS-Express Authentication template [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Coverage Status](https://coveralls.io/repos/github/abxsantos/nodejs-auth-template/badge.svg?branch=master)](https://coveralls.io/github/abxsantos/nodejs-auth-template?branch=master) [![Build Status](https://travis-ci.com/abxsantos/nodejs-auth-template.svg?branch=master)](https://travis-ci.com/abxsantos/nodejs-auth-template)[![codecov](https://codecov.io/gh/abxsantos/nodejs-auth-template/branch/master/graph/badge.svg)](https://codecov.io/gh/abxsantos/nodejs-auth-template)
<br>
A sample node js api for creating and authenticating users via JSON web tokens, it's used here to demonstrate the steps to extend API with your own rest api.     

## Steps

## PART I: Download & Build on local

## From github
### 1) Clone the repository, install node packages and verify routes locally
#### The first step is to set the environment variables as seen in the .env.example.
``` 
//on local
git clone https://github.com/abxsantos/nodejs-auth-template 
npm install
```
```
// If you have docker installed, you can build the MongoDB container
docker-compose up
```
#### If you don't have docker installed, you must provide a local mongo database URL in the .env file!
```
// To start the server
npm run start-dev
```

Open your local browser and try accessing     
`https://localhost:3001/api-docs/`   


### 2) Building the project files

**Note**  
Don't transfer `node_modules` folder, we can do install npm install later on remote server itself to pull down required node packages

```
cd sample-node-api
npm run build
```
