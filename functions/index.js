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
