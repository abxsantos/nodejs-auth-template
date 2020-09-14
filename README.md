# sample-node-express-api  
A sample node js api for creating and authenticating users via JSON web tokens, it's used here to demonstrate the steps to extend API with your own rest api.     

## Steps

## PART I: Download & Build on local

## From github
### 1) Clone the repository, install node packages and verify routes locally
#### The first step is to set the environment variables as seen in the .env.example.
``` 
//on local
git clone https://github.com/abxsantos/sample-node-express-api  
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
