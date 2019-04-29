# nuxt-firebase

> Nust.js deploy ready for firebase functions and host

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

# Install Nuxt.js app

### 1. Old method (deprecated / preferred because webpack 4) [read more...](https://www.telerik.com/blogs/getting-started-with-nuxtjs)

```
$ npm install -g @vue/cli @vue/cli-init
$ vue init nuxt-community/starter-template <project-name>
```

### 2. Npx generator (based on old webpack 3 and lots of security warning) [read more...](https://github.com/nuxt/create-nuxt-app)

```
$ npx create-nuxt-app <my-project>

or

$ npm init nuxt-app <my-project>
```

We will use (option 2)

## Add useful libs

#### @nuxtjs/style-resources

add sass less styl preprocessor 

```
$ npm i -D @nuxtjs/style-resources sass-loader node-sass
```

## Firebase Setup

create firebase project and copy project id

### Install firebase

init firebase for hosting and functions

```
$ firebase login
$ firebase init 

# select hosting and functions and choose your project from list

```

### Setup firebase env

```
$ firebase functions:config:set environment.apikey=""
$ firebase functions:config:set environment.authdomain=""
$ firebase functions:config:set environment.databaseurl=""
$ firebase functions:config:set environment.projectid=""
$ firebase functions:config:set environment.storagebucket=""
$ firebase functions:config:set environment.messagingsenderid=""
```

#### Create firebase function to serve SSR

```
$ mkdir functions
$ npm init
```

copy package.json dependency in functions

add index.js
```
// fucntions/index.js
// import Firebase function library
const functions = require('firebase-functions')

// import Nuxt
const { Nuxt } = require('nuxt')

// import express module
const express = require('express')
const app = express()

// add your express API required modules
console.log('api')
const api = require('./api/index')

// import firebase env if set
const envs = functions.config().environment

if(envs) {
  Object.entries(envs).forEach((k, v) => {
    console.log(k)
    process.env[`${k}`.toUpperCase()] = v
  })
}

// set public path to assets as defined in nuxt.config.js
//   build: {
//     /*
//     ** Run ESLint on save
//     */
//     publicPath: '/assets/',
const config = {
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config)

// base Nuxt request handler return render promise
function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

// add express api handler
app.use(api.path, api.handler)

// add nuxt render handler
app.use(handleRequest)

// export firebase function to serve SSR and API
module.exports = {
  ssr: functions.https.onRequest(app)
}

```
add following scripts to package.json

```
....
scripts: {
    ...
    "build": "npm run clean;npm run build:nuxt;npm run copy;npm run copy:api # for Firebase",
    "clean": "rm -rf {dist,.nuxt}",
    "copy": "mkdir dist;cp -R functions dist/server;cp -R app/static/ dist/client;cp -R .nuxt dist/server;cp -R dist/server/.nuxt/dist dist/client/assets",
    "copy:api": "cp -R server/api dist/server/api",
    "deploy:firebase": "firebase deploy"
    ...
}
....
```
in server/api there is an express REST API sample mapped to /api /api/posts

replace firebase.json with
```
{
  "hosting": {
    "public": "dist/client",
    "ignore": [
      "firebase.json",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "ssr"
      }
    ],
    "cleanUrls": true,
    "trailingSlash": true
  },
  "functions": {
    "source": "dist/server"
  },
  "appAssociation": "AUTO"
}

```
it map all request to be served by function called ssr 

#### Deploy to firebase
```
$ npm run build
$ npm run deploy:firebase
```

if you want to test locally
```
$ firebase serve 
```
