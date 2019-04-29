const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const posts = require('./routes/posts')

// Import API Routes
app.use(posts)
app.use('/', function (req, res, next) {
  res.json({ api: 'ok' })
})
// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
